import { NextResponse } from "next/server";

export async function POST(request: { formData: () => any }) {
  const data = await request.formData();

  //   const image = !data.get("image");
  //   if (image) {
  //     return NextResponse.json("No se encontro la imagen", { status: 400 });
  //   }

  //   const bytes = image.arrayBuffer();
  //   const buffer = Buffer.from(bytes);
  console.log(data.get("file"));

  return NextResponse.json("IMagen subida");
}
