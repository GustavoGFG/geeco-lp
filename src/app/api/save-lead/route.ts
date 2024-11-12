import { NextResponse } from 'next/server';
import sendEmail from '@/app/utils/sendEmail';

// Define o tipo para os dados de lead
type LeadData = {
  name: string;
  phone: string;
  email: string;
  message?: string;
  company: string;
};

export async function POST(request: Request) {
  let data: LeadData;
  
  try {
    // Validação básica para certificar que o corpo da requisição é um objeto JSON
    data = await request.json();

    if (!data.name || !data.phone || !data.email) {
      return NextResponse.json({ message: 'Nome, telefone e e-mail são obrigatórios' }, { status: 400 });
    }

    console.log(data);

    // Exemplo de uma requisição POST para criar um novo lead
    await createLead(data);

    if (data.message) {
      await sendEmail(
        process.env.EMAIL_RECEIVER as string,
        'Novo Lead Capturado',
        `Nome: ${data.name}\nTelefone: ${data.phone}\nE-mail: ${data.email}\nMensagem: ${data.message}`,
        false,
      );
    }

    return NextResponse.json({ message: 'Lead capturado com sucesso!' }, { status: 201 });
  } catch (error) {
    console.error('Erro ao salvar o lead:', error);
    return NextResponse.json({ message: 'Erro ao capturar o lead' }, { status: 500 });
  }
}

async function createLead(leadData: LeadData) {
  console.log(leadData)
  try {
    const response = await fetch(process.env.LEAD_DB_API as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      throw new Error('Erro ao criar lead na API externa');
    }

    const result = await response.json();
    console.log('Lead criado com sucesso:', result);
  } catch (error) {
    console.error('Erro ao criar o lead:', error);
    throw error; // Repassa o erro para o manipulador de exceções na função `POST`
  }
}
