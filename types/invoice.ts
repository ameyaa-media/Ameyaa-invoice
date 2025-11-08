export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number | string;
  rate: number | string;
  amount: number;
}

export interface InvoiceData {
  invoiceNumber: string;
  date: string;
  fromName: string;
  fromEmail: string;
  fromPhone: string;
  fromAddress: string;
  toName: string;
  toEmail: string;
  toPhone: string;
  toAddress: string;
  items: InvoiceItem[];
  taxRate: number | string;
  subtotal: number;
  taxAmount: number;
  total: number;
}
