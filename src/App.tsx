import { useState } from "react";

import {
  Wallet,
  Users,
  ClipboardList,
  ChevronRight,
  Store,
  Shirt,
  HandCoins,
  PackageCheck,
  Heart,
  MessageCircle,
  Smartphone,
  BarChart3,
  X,
  Menu,
  Check,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5500000000000";
const TESTAR_GRATIS_LINK = "#";

const realityCards = [
  {
    title: "Vendas anotadas na correria",
    text: "Pedido no WhatsApp, entrega na rua e tudo sendo anotado onde dá.",
    image: "/images/cards/vida-real-1.jpg",
  },
  {
    title: "Cliente pediu, levou e ficou para depois",
    text: "A cliente leva, combina de pagar depois e você precisa lembrar certinho.",
    image: "/images/cards/vida-real-2.jpg",
  },
  {
    title: "Cobranças que ficam para amanhã",
    text: "Com tanta coisa para fazer, uma cobrança pode passar batida.",
    image: "/images/cards/vida-real-3.png",
  },
  {
    title: "Fiado misturado com venda do dia",
    text: "Quem pagou? Quem ficou devendo? Quando tudo vai pro papel, fica fácil se perder.",
    image: "/images/cards/vida-real-4.png",
  },
  {
    title: "Condicional sem clareza",
    text: "Sai peça, volta peça, vira venda... e tudo precisa ficar organizado.",
    image: "/images/cards/vida-real-5.png",
  },
  {
    title: "Dúvida sobre quem pagou",
    text: "No fim do dia, a pergunta volta: quem já pagou e quem ainda deve?",
    image: "/images/cards/vida-real-6.png",
  },
];

const features = [
  {
    icon: Wallet,
    title: "Vendas",
    text: "Registre cada venda em poucos segundos, sem complicar sua rotina.",
  },
  {
    icon: Users,
    title: "Clientes",
    text: "Guarde histórico, telefone, compras e pendências em um só lugar.",
  },
  {
    icon: ClipboardList,
    title: "Recebimentos",
    text: "Acompanhe o que entrou, quanto falta receber e quem ainda está devendo.",
  },
  {
    icon: MessageCircle,
    title: "Cobranças",
    text: "Envie mensagens prontas pelo WhatsApp com muito mais segurança.",
  },
  {
    icon: Smartphone,
    title: "No celular",
    text: "Feito para usar na mão, em casa, na rua, na feira ou na loja.",
  },
  {
    icon: BarChart3,
    title: "Relatórios",
    text: "Veja seus resultados com clareza, sem precisar fazer contas no papel.",
  },
];

const audience = [
  { icon: Store, title: "Vendedores ambulantes" },
  { icon: Shirt, title: "Sacoleiras e revendedoras" },
  { icon: MessageCircle, title: "Quem vende pelo WhatsApp" },
  { icon: HandCoins, title: "Quem vende no fiado" },
  { icon: PackageCheck, title: "Quem trabalha com condicional" },
  { icon: Users, title: "Pequenos negócios" },
];

function KaderLogo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/images/logo/logo_kader.png"
        alt="Kader"
        className="h-12 w-12 object-contain"
      />

      <div>
        <h1 className="text-3xl font-bold leading-none text-slate-900">
          Kader
        </h1>

        <p className="mt-1 text-sm font-medium text-slate-500">
          Suas vendas no controle
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F6F2] text-[#313A4A]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-[#313A4A]/10" />
<div className="absolute -right-40 top-[35%] h-[520px] w-[520px] rounded-full bg-[#46536A]/10" />
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#" aria-label="Kader">
            <KaderLogo />
          </a>

          <nav className="hidden items-center gap-10 text-sm font-medium text-slate-700 lg:flex">
            <a href="#funcionalidades" className="transition hover:text-green-600">
              Funcionalidades
            </a>
            <a href="#como-funciona" className="transition hover:text-green-600">
              Como funciona
            </a>
            <a href="#condicional" className="transition hover:text-green-600">
              Condicional
            </a>
            <a href="#planos" className="transition hover:text-green-600">
              Planos
            </a>
            <a href="#duvidas" className="transition hover:text-green-600">
              Dúvidas
            </a>
          </nav>

          <a
            href={TESTAR_GRATIS_LINK}
            className="flex rounded-2xl bg-[#313A4A] px-6 py-4 font-semibold text-white shadow-lg hover:bg-[#252C39] transition-all duration-300"
          >
            Testar grátis agora
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#313A4A] lg:hidden"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-5 border-t border-slate-200 bg-white px-5 py-6 font-medium text-[#313A4A] lg:hidden">
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#condicional">Condicional</a>
            <a href="#planos">Planos</a>
            <a href="#duvidas">Dúvidas</a>
            <a
              href={TESTAR_GRATIS_LINK}
              className="mt-2 rounded-2xl bg-[#313A4A] py-4 text-center font-semibold text-white"
            >
              Testar grátis agora
            </a>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
            <div className="relative z-10">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-5 py-2 text-sm font-semibold text-green-700">
                DO CADERNO PARA O CONTROLE
                <Heart size={15} />
              </div>

              <h1 className="max-w-2xl text-[2.5rem] md:text-[3rem] font-black leading-[0.95] tracking-[-2px] text-[#313A4A] md:text-[4rem] lg:text-[4.75rem]">
                Seu caderno
                <br />
                te ajudou até aqui.
                <br />
                <>
  <span className="text-[#313A4A]">
    O Kader ajuda você
  </span>
  <br />
  <span className="text-[#313A4A]">
    a ir ainda mais longe.
  </span>
</>
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-600">
                Organize suas vendas, clientes, fiado, recebimentos e cobranças
                no WhatsApp — sem complicação e sem perder o seu jeito de
                vender.
              </p>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <a
                  href={TESTAR_GRATIS_LINK}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[#313A4A] px-8 py-5 text-lg font-semibold text-white shadow-xl shadow-[#313A4A]/10 transition-all hover:scale-[1.02] hover:bg-[#252C39]"
                >
                  Testar grátis agora
                  <ChevronRight size={20} />
                </a>

                <a
                  href={WHATSAPP_LINK}
                  className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-8 py-5 text-lg font-semibold shadow-sm transition-all hover:scale-[1.02] hover:border-green-300"
                >
                  <MessageCircle className="text-green-600" />
                  Falar no WhatsApp
                </a>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-5">
                {[
                  "Simples de usar",
                  "Funciona no celular",
                  "Cobranças pelo WhatsApp",
                  "Relatórios visuais",
                  "Tudo em um só lugar",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white/90 px-3 py-3 text-center text-sm font-medium shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px] lg:min-h-[620px]">
              <div className="absolute inset-0 overflow-hidden rounded-[40px] bg-[#313A4A] shadow-2xl">
                <img
                  src="/images/hero/vendedora-caderno.jpg"
                  alt="Vendedora organizando vendas, roupas e anotações no caderno"
                  className="h-full w-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-r from-[#F7F6F2]/45 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-6 right-4 z-30 w-[220px] rounded-[30px] border border-white/20 bg-[#061443] p-6 shadow-[0_35px_90px_rgba(7,17,51,0.55),0_12px_30px_rgba(0,0,0,0.28)] ring-1 ring-white/10">
                <div className="space-y-4">
                  {[
                    
  "Pare de perder vendas no caderno",
  "Saiba quem te deve sem fazer contas",
  "Cobranças direto pelo WhatsApp",
  "Tudo organizado no celular",

                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-semibold text-white">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00D46A] shadow-[0_8px_18px_rgba(0,212,106,0.35)]">
                        <Check size={15} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-4 font-semibold uppercase tracking-wide text-green-600">
                  Vida real
                </p>
                <h2 className="max-w-4xl text-4xl font-black text-[#313A4A] lg:text-5xl">
                  Quem vende todos os dias conhece essa correria
                </h2>
              </div>

              <div className="max-w-sm rounded-3xl border border-green-100 bg-green-50 p-6 font-semibold text-green-900">
                Você não está sozinha. Essa correria faz parte da rotina de milhares de pessoas que vendem todos os dias.
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {realityCards.map((item) => (
                <div
                  key={item.title}
                  className="group overflow-hidden rounded-[32px] border border-slate-100 bg-[#F7F6F2] shadow-sm transition-all hover:-translate-y-1"
                >
                  <div className="h-[360px] overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-[center_35%] transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-black text-[#313A4A]">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="funcionalidades" className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-start gap-14 lg:grid-cols-[1fr_2fr]">
              <div>
                <p className="mb-5 font-semibold uppercase tracking-wide text-green-600">
                  A solução
                </p>

                <h2 className="text-4xl font-black leading-tight text-[#313A4A] lg:text-5xl">
                   Menos papel.
                  <br />
                  Mais organização.
                  <br />
                  Mais tranquilidade.
                </h2>

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600">
                  Clientes, cobranças, fiados, condicional e recebimentos
  organizados em um só lugar, sem mudar seu jeito de vender.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {features.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:shadow-xl min-h-[240px]"
                  >
                    <card.icon className="mb-5 text-green-600" size={36} />

                    <h3 className="mb-3 text-2xl font-bold text-[#313A4A]">
                      {card.title}
                    </h3>

                    <p className="text-slate-600 leading-8">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
{/* VEJA O KADER FUNCIONANDO */}

<section className="py-16">
  <div className="mx-auto max-w-7xl px-5 lg:px-8">

    <span className="text-green-600 font-semibold uppercase tracking-wide">
      VEJA O KADER FUNCIONANDO
    </span>

    <h2 className="mt-4 text-4xl font-black text-[#313A4A]">
      Organize vendas, clientes,
      <br />
      recebimentos e fiados
      <br />
      sem depender do caderno.
    </h2>

    <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
      Tudo no celular. Simples, rápido e feito para a rotina de quem vende todos os dias.
    </p>

    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-2">

  <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
    <img
      src="/images/dashboard/kader-dashboard-home.png"
      alt="Dashboard Kader"
      className="w-full max-h-[280px] object-contain"
    />

    <div className="p-6">
      <h3 className="text-xl font-black text-[#313A4A]">
        Dashboard inteligente
      </h3>

      <p className="mt-3 text-slate-600">
        Veja quem pagou, quem deve e o que precisa da sua atenção hoje.
      </p>
    </div>
  </div>

  <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl flex flex-col h-full">

  <img
    src="/images/dashboard/clientes-kader.png"
    alt="Clientes Kader"
    className="w-full object-contain"
  />

  <div className="p-6">
    <h3 className="text-xl font-black text-[#313A4A]">
      Clientes organizados
    </h3>

    <p className="mt-3 text-slate-600">
      Encontre clientes, histórico e compras sem procurar no caderno.
    </p>
  </div>

</div>
<div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl flex flex-col h-full">

  <img
    src="/images/dashboard/devedores-kader.png"
    alt="Devedores Kader"
    className="w-full h-[280px] object-cover object-top"
  />

  <div className="p-6">
    <h3 className="text-xl font-black text-[#313A4A]">
      Devedores organizados
    </h3>

    <p className="mt-3 text-slate-600">
      Saiba quem ainda deve e cobre no momento certo.
    </p>
  </div>

</div>
<div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl flex flex-col h-full">

  <img
    src="/images/dashboard/condicional-kader.png"
    alt="Condicional Kader"
    className="w-full h-[280px] object-cover object-top"
  />

  <div className="p-6">
    <h3 className="text-xl font-black text-[#313A4A]">
      Condicional no controle
    </h3>

    <p className="mt-3 text-slate-600">
      Sem bagunça: veja o que saiu, voltou ou virou venda.
    </p>
  </div>

</div>
</div>

  </div>
</section>
        <section id="condicional" className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[0.9fr_2fr_0.8fr] lg:px-8">
            <div>
              <p className="mb-5 font-semibold uppercase tracking-wide text-green-600">
                Seu diferencial
              </p>
              <h2 className="text-4xl font-black leading-tight text-[#313A4A]">
                Fez condicional?
                <br />O Kader entende esse fluxo.
              </h2>
              <p className="mt-6 leading-relaxed text-slate-600">
                Deixou peças com a cliente para ela escolher? O Kader controla o
                que saiu, o que voltou e o que virou venda, sem bagunça e sem
                misturar com o financeiro.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-4">
              {[
                ["1", "Saiu com a cliente", "Você registra as peças que saíram."],
                ["2", "Voltou", "Registre o que voltou sem virar venda."],
                ["3", "Virou venda", "O que ficou, entra como venda."],
                ["4", "Tudo organizado", "Financeiro limpo, sem bagunça."],
              ].map(([number, title, text]) => (
                <div key={number} className="rounded-3xl bg-[#F7F6F2] p-6">
                  <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                    {number}
                  </div>
                  <h3 className="mb-2 font-black text-[#313A4A]">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {[
                "Não mistura com fiado",
                "Não perde o controle",
                "Sabe o que saiu",
                "Sabe o que voltou",
                "Sabe o que vendeu",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 font-semibold">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <Check size={16} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
{/* QUEM USA O KADER CONSEGUE */}

<section className="py-20">
  <div className="mx-auto max-w-7xl px-5 lg:px-8">

    <span className="text-green-600 font-semibold uppercase tracking-wide">
      RESULTADOS REAIS
    </span>

    <h2 className="mt-4 text-4xl font-black text-[#313A4A]">
      Quem usa o Kader consegue:
    </h2>

    <div className="mt-6 grid gap-5 md:grid-cols-2">

      <div className="flex items-start gap-4 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
  ✓
</div>

        <div>
          <h3 className="font-black text-[#313A4A]">
            Lembrar quem deve
          </h3>

          <p className="mt-2 text-slate-600">
            Pare de procurar nomes em caderno, papéis e mensagens espalhadas.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
  ✓
</div>

        <div>
          <h3 className="font-black text-[#313A4A]">
            Parar de esquecer cobranças
          </h3>

          <p className="mt-2 text-slate-600">
            Saiba exatamente quem precisa da sua atenção hoje.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
  ✓
</div>

        <div>
          <h3 className="font-black text-[#313A4A]">
            Organizar condicional
          </h3>

          <p className="mt-2 text-slate-600">
            Saiba o que saiu, voltou e virou venda — sem misturar tudo no papel.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
  ✓
</div>

        <div>
          <h3 className="font-black text-[#313A4A]">
            Vender sem depender do caderno
          </h3>

          <p className="mt-2 text-slate-600">
            Seu jeito de vender continua. Só fica muito mais organizado.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
        <section className="py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="mb-5 font-semibold uppercase tracking-wide text-green-600">
                A transformação
              </p>
              <h2 className="text-4xl font-black leading-tight text-[#313A4A] lg:text-5xl">
                Menos bagunça.
                <br />
                Mais controle.
                <br />
                Mais tranquilidade.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                O Kader transforma a correria do dia a dia em organização e
                segurança para você vender mais e crescer.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-8 shadow-2xl lg:p-10">

  <div className="mb-6 flex items-center gap-4">
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20 text-green-400 font-bold">
      JS
    </div>

    <div>
      <p className="font-bold text-lg text-slate-800">
  Juliana
</p>
      <p className="text-sm text-slate-500">
        Revendedora • validação piloto Kader
      </p>
    </div>
  </div>

  <p className="text-2xl font-bold leading-snug text-slate-800 lg:text-3xl">
    “Hoje eu sei quem me deve, quem já pagou e quanto ainda falta receber.”
  </p>

  <p className="mt-6 text-slate-600">
    Antes eu anotava tudo espalhado. Agora ficou rápido, organizado e muito mais fácil de acompanhar.
  </p>

</div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="mb-5 font-semibold uppercase tracking-wide text-green-600">
              Feito para quem vende de verdade
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {audience.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-100 bg-[#F7F6F2] px-6 py-5 min-h-[210px] text-center"
                >
                  <item.icon className="mx-auto mb-4 text-green-600" size={34} />
                  <p className="font-semibold text-[#313A4A]">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
{/* CONSTRUÍDO COM QUEM VENDE DE VERDADE */}

<section className="py-20">
  <div className="mx-auto max-w-7xl px-5 lg:px-8">

    <span className="text-green-600 font-semibold uppercase tracking-wide">
      CRIADO JUNTO DE QUEM VENDE TODOS OS DIAS
    </span>

    <h2 className="mt-4 text-4xl font-black text-[#313A4A]">
      Construído junto com quem vende todos os dias.
    </h2>

    <p className="mt-6 max-w-3xl text-lg text-slate-600">
      O Kader não nasceu dentro de uma sala de reunião.
      Está sendo refinado junto com quem vende pelo WhatsApp,
      usa caderno, trabalha com fiado, condicional e vive a correria do dia a dia.
    </p>

    <div className="mt-10 grid gap-5 md:grid-cols-2">

      <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-3">

  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
    ✓
  </div>

  <h3 className="font-black text-[#313A4A]">
    Sugestões de clientes reais
  </h3>

</div>

        <p className="mt-3 text-slate-600">
          Novas funções surgem a partir de pedidos e necessidades de quem vende todos os dias.
        </p>
      </div>

      <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-3">

  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
    ✓
  </div>

  <h3 className="font-black text-[#313A4A]">
    Condicional virou diferencial
  </h3>

</div>

        <p className="mt-3 text-slate-600">
          O controle de condicional nasceu da rotina real de vendas e virou uma das funções mais fortes do sistema.
        </p>
      </div>

      <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-3">

  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
    ✓
  </div>

  <h3 className="font-black text-[#313A4A]">
    Melhorias baseadas em uso real
  </h3>

</div>

        <p className="mt-3 text-slate-600">
          Cobranças, recebimentos e organização foram ajustados usando cenários reais.
        </p>
      </div>

      <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
       <div className="flex items-start gap-3">

  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
    ✓
  </div>

  <h3 className="font-black text-[#313A4A]">
    Construído junto com vendedores
  </h3>

</div>

        <p className="mt-3 text-slate-600">
          Sacoleiras, revendedores, ambulantes e pequenos negócios estão ajudando a construir o Kader.
        </p>
      </div>

    </div>

  </div>
</section>
        <section id="planos" className="py-24">
          <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-5 lg:grid-cols-[0.8fr_1.2fr_1.2fr] lg:px-8">
            <div>
              <p className="mb-5 font-semibold uppercase tracking-wide text-green-600">
                Planos simples
              </p>
              <h2 className="text-4xl font-black leading-tight text-[#313A4A]">
                Escolha o plano ideal para o seu momento.
              </h2>
              <p className="mt-6 text-slate-600">
                Comece grátis. Cancele quando quiser.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-3xl font-black">Grátis</h3>
              <p className="mt-2 text-slate-500">Ideal para começar</p>
              <div className="mt-6 text-4xl font-black">R$ 0</div>
              <ul className="mt-8 space-y-4">
                {[
                  "Até 50 clientes",
                  "Até 100 vendas por mês",
                  "Cobranças por WhatsApp",
                  "Controle financeiro",
                  "Relatórios essenciais",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="text-green-600" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={TESTAR_GRATIS_LINK}
                className="mt-8 block rounded-2xl border border-slate-300 py-4 text-center font-semibold"
              >
                Começar grátis
              </a>
            </div>

            <div className="relative rounded-[32px] border-2 border-green-500 bg-white p-8 shadow-xl">
              <span className="absolute right-6 top-6 rounded-full bg-green-100 px-4 py-1 text-sm font-bold text-green-700">
                Mais escolhido
              </span>
              <h3 className="text-3xl font-black">Pro</h3>
              <p className="mt-2 text-slate-500">Para quem quer crescer</p>
              <div className="mt-6 text-4xl font-black">R$ 29,90/mês</div>
              <ul className="mt-8 space-y-4">
                {[
                  "Clientes ilimitados",
                  "Vendas ilimitadas",
                  "Relatórios completos",
                  "Cobranças automáticas",
                  "Controle de condicional",
                  "Suporte prioritário",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="text-green-600" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={TESTAR_GRATIS_LINK}
                className="mt-8 block rounded-2xl bg-green-600 py-4 text-center font-semibold text-white"
              >
                Começar agora
              </a>
            </div>
          </div>
        </section>
{/* CTA FINAL */}

<section className="py-24">
  <div className="mx-auto max-w-6xl px-5">

    <div className="rounded-[40px] bg-[#0F172A] p-10 text-center text-white shadow-2xl">

      <span className="text-green-400 font-semibold uppercase tracking-wide">
        COMECE AGORA
      </span>

      <h2 className="mt-5 text-4xl font-black leading-tight">
        Seu caderno te ajudou até aqui.
        <br />
        O Kader ajuda você a ir ainda mais longe.
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-slate-300 text-lg">
        Organize clientes, cobranças, fiados, recebimentos e vendas
        sem mudar seu jeito de trabalhar.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

        <a
          href={TESTAR_GRATIS_LINK}
          className="rounded-2xl bg-green-500 px-8 py-4 font-bold text-white"
        >
          Testar grátis
        </a>

        <a
          href={WHATSAPP_LINK}
          className="rounded-2xl border border-slate-600 px-8 py-4 font-bold text-white"
        >
          Falar no WhatsApp
        </a>

      </div>

    </div>

  </div>
  </section>
<section className="px-5 pb-12 lg:px-8">
  <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[36px] bg-[#313A4A] p-8 text-white shadow-2xl lg:grid-cols-[1fr_1fr] lg:p-12">
    <div className="flex items-start gap-12 px-2">
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl p-1">
  <img
    src="/images/logo/logo_kader.png"
    alt="Kader"
    className="h-18 w-18 scale-110 object-contain"
  />
</div>

      <div>
        <h2 className="text-3xl font-black leading-tight lg:text-4xl">
          Feito para quem
          <br />
          vende todos os dias.
          <br />
          Simples, organizado
          <br />
          e do seu jeito.
        </h2>

        <p className="mt-5 text-slate-200">
          Comece hoje a vender com mais organização,
          <br />
          tranquilidade e segurança.
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
      <div className="rounded-2xl bg-white/10 px-6 py-4 text-slate-300">
        © 2026 Kader
        <br />
        Feito para quem vende todos os dias.
      </div>

      <a
  href="https://instagram.com/ensinarencantar"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-4 rounded-2xl bg-white px-6 py-4 text-slate-700"
>
  <Heart
    size={18}
    className="text-pink-600 flex-shrink-0"
  />

  <span className="leading-snug font-semibold">
    Acompanhe a evolução do Kader
    <br />
    <span className="text-slate-500 font-normal">
      no Instagram
    </span>
  </span>
</a>
   </div>
</div>
</section>

</main>

</div>

);
}