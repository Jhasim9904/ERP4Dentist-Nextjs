import InvoiceView from "@/components/Invoice/InvoiceView";

export default function InvoicePage() {
  const invoiceData = {
    doctor: "Dr. Sabari",
    branch: "Teynampet",
    clinic: "NewMedical Clinic",
    invoiceDate: "July 4, 2025",
    invoiceTime: "3:07 PM",
    patient: {
      name: "Choki dhani",
      mobile: "8525939833",
      address: "47, Varu village, Brahmnoi, Pune, 411000"
    },
    planNo: "1",
    dateTime: "2025-04-17 07:01:26",
    procedure: "Braces Consulting",
    type: "Adjustment",
    transactionId: "1P3",
    amount: "700"
  };

  return <InvoiceView invoiceData={invoiceData} />;
}
    