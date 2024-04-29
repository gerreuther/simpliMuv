"use server";

const token = "qwertyuiopasdfghjklzxcvbnm1234";

export async function createLead(request) {
  console.log(request);
  const res = await fetch(
    "https://nathan.tasa.develop.simplitec.io/webhook/simplimuv/createlead",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: request,
    }
  );

  const data = await res.json();

  return Response.json(data);
}
