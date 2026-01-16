import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-500 to-indigo-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Flowly Bot</h1>
      <p className="mb-8 text-lg text-center max-w-xl">
        Seu bot completo para vendas, automações e remarketing, tudo em um só lugar.
      </p>
      <Link href="https://painel.flowlybot.shop">
        <a className="px-6 py-3 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition">
          Começar Agora
        </a>
      </Link>
    </div>
  );
}