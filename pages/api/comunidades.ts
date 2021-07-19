import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response) {
  if (request.method === "POST") {
    const TOKEN = 'ba3b8c4338d48fd28cf8bd730857e4';
    const client = new SiteClient(TOKEN);

    const registro = await client.items.create({
      itemType: "967596",
      ...request.body,
    });

    response.json({
      dados: "Algum dado",
      registro: registro,
    });

    return;
  }

  response.status(404).json({
    message: "Ainda não temos nada no GET, mas no POST tem!",
  });
}
