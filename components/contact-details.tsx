import { useInvoice } from "@/context/invoice-context";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function ContactDetails() {
  const { invoice, updateInvoice } = useInvoice();

  return (
    <Card>
      <CardHeader>
        <CardTitle>From & To</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <h3 className="font-medium">From (Your Details)</h3>
          <div>
            <Label htmlFor="fromName" className="mb-2">
              Name
            </Label>
            <Input
              id="fromName"
              value={invoice.fromName}
              onChange={(e) => updateInvoice({ fromName: e.target.value })}
              placeholder="Your name or company"
            />
          </div>
          <div>
            <Label htmlFor="fromEmail" className="mb-2">
              Email
            </Label>
            <Input
              id="fromEmail"
              value={invoice.fromEmail}
              onChange={(e) => updateInvoice({ fromEmail: e.target.value })}
              placeholder="your@email.com"
              type="email"
            />
          </div>
          <div>
            <Label htmlFor="fromPhone" className="mb-2">
              Phone
            </Label>
            <Input
              id="fromPhone"
              value={invoice.fromPhone}
              onChange={(e) => updateInvoice({ fromPhone: e.target.value })}
              placeholder="Your phone number"
              type="tel"
            />
          </div>
          <div>
            <Label htmlFor="fromAddress" className="mb-2">
              Address
            </Label>
            <Input
              id="fromAddress"
              value={invoice.fromAddress}
              onChange={(e) => updateInvoice({ fromAddress: e.target.value })}
              placeholder="Your full address"
            />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">To (Client Details)</h3>
          <div>
            <Label htmlFor="toName" className="mb-2">
              Name
            </Label>
            <Input
              id="toName"
              value={invoice.toName}
              onChange={(e) => updateInvoice({ toName: e.target.value })}
              placeholder="Client name or company"
            />
          </div>
          <div>
            <Label htmlFor="toEmail" className="mb-2">
              Email
            </Label>
            <Input
              value={invoice.toEmail}
              onChange={(e) => updateInvoice({ toEmail: e.target.value })}
              id="toEmail"
              placeholder="client@email.com"
              type="email"
            />
          </div>
          <div>
            <Label htmlFor="toPhone" className="mb-2">
              Phone
            </Label>
            <Input
              id="toPhone"
              value={invoice.toPhone}
              onChange={(e) => updateInvoice({ toPhone: e.target.value })}
              placeholder="Client's phone number"
              type="tel"
            />
          </div>
          <div>
            <Label htmlFor="toAddress" className="mb-2">
              Address
            </Label>
            <Input
              id="toAddress"
              value={invoice.toAddress}
              onChange={(e) => updateInvoice({ toAddress: e.target.value })}
              placeholder="Client's full address"
            />
          </div>
          ```
        </div>
      </CardContent>
    </Card>
  );
}
