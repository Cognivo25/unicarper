// Replaces the template's assets/mail.php. Responds with plain text, which
// assets/js/ajax-form.js shows under the form.
// Delivery: set CONTACT_WEBHOOK_URL (Formspree, Zapier, Make, Slack, ...) to receive
// the enquiry as JSON { name, phone, email, projectType, message }.
const text = (body, status = 200) => new Response(body, { status, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
const FALLBACK = 'Please email projects@unicarper.com or call +91-9538444564.';

export async function POST(req) {
  const form = await req.formData().catch(() => null);
  const field = (k) => String(form?.get(k) ?? '').trim();
  const [name, phone, email, projectType, message] = ['name', 'phone', 'email', 'projectType', 'message'].map(field);

  if (!name || !email || !message) return text('Please fill in your name, email and message.', 400);
  if (name.length > 100 || phone.length > 30 || email.length > 200 || projectType.length > 100 || message.length > 5000) {
    return text('That message is too long.', 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return text('Please enter a valid email address.', 400);

  const hook = process.env.CONTACT_WEBHOOK_URL;
  if (!hook) return text(`The inquiry form is not connected yet. ${FALLBACK}`, 503);

  const res = await fetch(hook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, phone, email, projectType, message }),
  }).catch(() => null);
  if (!res?.ok) return text(`Sorry, your inquiry could not be sent. ${FALLBACK}`, 502);

  return text('Thank you! Your inquiry has been received. The team will respond with the next steps.');
}
