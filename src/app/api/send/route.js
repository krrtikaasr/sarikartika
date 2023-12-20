//import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";


const fromEmail = process.env.FROM_EMAIL;

export async function POST() {
  try {
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
