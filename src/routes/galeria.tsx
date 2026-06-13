import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { z } from "zod";
import { PageWrap, SectionTitle } from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";

// ── Stare zdjęcia ──
import nOld1  from "@/assets/nagrobek-1.webp";
import nOld2  from "@/assets/nagrobek-2.webp";
import nOld3  from "@/assets/nagrobek-3.webp";
import nOld4  from "@/assets/nagrobek-4.webp";
import nOld5  from "@/assets/nagrobek-5.webp";
import nOld6  from "@/assets/673414230_992487589976643_5370561090871691160_n.webp";
import nOld7  from "@/assets/569516638_849008100991260_4224958326701579055_n.webp";
import nOld8  from "@/assets/565679113_846124567946280_8598260601751854206_n.webp";
import nOld9  from "@/assets/564610504_842136365011767_6562503235974255662_n.webp";
import nOld10 from "@/assets/703844548_1017523120806423_3790274995248193897_n (2).webp";
import nOld11 from "@/assets/494141487_710766191482119_6563128306248426608_n.webp";
import nOld12 from "@/assets/552605846_823846770174060_2509920610635215638_n.webp";
import nOld13 from "@/assets/645398866_1540871334707128_799992057582408873_n (1).webp";
import nDetal    from "@/assets/nagrobek-detal.webp";
import nWarsztat from "@/assets/nagrobek-warsztat.webp";

// ── Nowe zdjęcia IMG_6xxx ──
import n1  from "@/assets/IMG_6006.webp";
import n2  from "@/assets/IMG_6008.webp";
import n3  from "@/assets/IMG_6009.webp";
import n4  from "@/assets/IMG_6015.webp";
import n5  from "@/assets/IMG_6016.webp";
import n6  from "@/assets/IMG_6011.webp";
import n7  from "@/assets/IMG_6012.webp";
import n8  from "@/assets/IMG_6013.webp";
import n9  from "@/assets/IMG_6014.webp";
import n10 from "@/assets/IMG_6017.webp";
import n11 from "@/assets/IMG_6019.webp";
import n12 from "@/assets/IMG_6020.webp";
import n13 from "@/assets/IMG_6021.webp";
import n14 from "@/assets/IMG_6022.webp";
import n15 from "@/assets/IMG_6023.webp";
import n16 from "@/assets/IMG_6018.webp";
import n17 from "@/assets/IMG_6025.webp";
import n18 from "@/assets/IMG_6026.webp";
import n19 from "@/assets/IMG_6029.webp";
import n20 from "@/assets/IMG_6031.webp";
import n21 from "@/assets/IMG_6033.webp";
import n22 from "@/assets/IMG_6034.webp";
import n23 from "@/assets/IMG_6027.webp";
import n24 from "@/assets/IMG_6028.webp";
import n25 from "@/assets/IMG_6030.webp";
import n26 from "@/assets/IMG_6032.webp";
import n27 from "@/assets/IMG_6035.webp";
import n28 from "@/assets/IMG_6036.webp";
import n29 from "@/assets/IMG_6037.webp";
import n30 from "@/assets/IMG_6038.webp";
import n31 from "@/assets/IMG_6039.webp";
import n32 from "@/assets/IMG_6040.webp";
import n33 from "@/assets/IMG_6042.webp";
import n34 from "@/assets/IMG_6043.webp";
import n35 from "@/assets/IMG_6044.webp";
import n36 from "@/assets/IMG_6046.webp";
import n37 from "@/assets/IMG_6047.webp";
import n38 from "@/assets/IMG_6048.webp";
import n39 from "@/assets/IMG_6049.webp";
import n40 from "@/assets/IMG_6050.webp";
import n41 from "@/assets/IMG_6051.webp";
import n42 from "@/assets/IMG_6052.webp";
import n43 from "@/assets/8c6e237b-1af3-4b65-9fd8-d95c1d33134b.webp";

export const Route = createFileRoute("/galeria")({
  validateSearch: z.object({
    kategoria: z
      .enum(["wszystkie", "pojedyncze", "podwojne", "Naprawy/Renowacja", "dzieciece", "Grobowiec", "liternictwo/galatria/grawery"])
      .optional(),
  }),
  head: () => ({
    meta: [
      { title: "Galeria realizacji — Nagrobki i renowacje | NAGROBEX Poznań" },
      { name: "description", content: "Zobacz nasze realizacje — nagrobki granitowe, projekty rodzinne, renowacje. NAGROBEX Poznań." },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: GaleriaPage,
});

type Cat = "pojedyncze" | "podwojne" | "Naprawy/Renowacja" | "dzieciece" | "Grobowiec" | "liternictwo/galatria/grawery";

const items: { img: string; type: string; cats: Cat[]; desc: string }[] = [
  { img: nOld1,  type: "Grobowiec",               cats: ["Grobowiec"],                                    desc: "nr, 1" },
  { img: nOld10, type: "Naprawy/Renowacja",        cats: ["Naprawy/Renowacja"],                                    desc: "nr, 2" },
  { img: nOld6,  type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                           desc: "nr, 3" },
  { img: nOld7,  type: "Naprawy/Renowacja",       cats: ["Naprawy/Renowacja"],                                   desc: "nr, 4" },
  { img: nOld8,  type: "Nagrobek podwójny",        cats: ["podwojne"],                           desc: "nr, 5" },
  { img: nOld9,  type: "Naprawa/Renowacja",        cats: ["Naprawy/Renowacja"],                           desc: "nr, 6" },
  { img: nOld2,  type: "Nagrobek podwójny",        cats: ["podwojne"],                                    desc: "nr, 7" },
  { img: nOld3,  type: "Nagrobek pojedynczy",      cats: ["pojedyncze"],                                  desc: "nr, 8" },
  { img: nOld4,  type: "Grobowiec",               cats: ["Grobowiec"],                                    desc: "nr, 9" },
  { img: nOld5,  type: "Nagrobek pojedynczy",      cats: ["pojedyncze"],                                  desc: "nr, 10" },
  { img: nOld11, type: "Grobowiec",               cats: ["Grobowiec"],                                    desc: "nr, 11" },
  { img: nOld12, type: "Nagrobek pojedynczy",      cats: ["pojedyncze"],                                  desc: "nr, 12" },
  { img: n43,    type: "Grobowiec",               cats: ["Grobowiec"],                                    desc: "nr, 13" },
  { img: nDetal, type: "Liternictwo/Galanteria/Grawery", cats: ["liternictwo/galatria/grawery"],          desc: "nr, 14" },
  { img: nWarsztat, type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],                                   desc: "nr, 15" },
  { img: n1,  type: "Nagrobek podwójny",          cats: ["podwojne"],                                     desc: "nr, 16" },
  { img: n2,  type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 17" },
  { img: n3,  type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 18" },
  { img: n4,  type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 19" },
  { img: n5,  type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 20" },
  { img: n6,  type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 21" },
  { img: n7,  type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 22" },
  { img: n8,  type: "Nagrobek podwójny",          cats: ["podwojne"],                                     desc: "nr, 23" },
  { img: n9,  type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 24" },
  { img: n10, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 25" },
  { img: n11, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 26" },
  { img: n12, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 27" },
  { img: n13, type: "Nagrobek podwójny",          cats: ["podwojne"],                                     desc: "nr, 28" },
  { img: n14, type: "Nagrobek podwójny",          cats: ["podwojne"],                                     desc: "nr, 29" },
  { img: n15, type: "Nagrobek podwójny",          cats: ["podwojne"],                                     desc: "nr, 30" },
  { img: n16, type: "Nagrobek podwójny",          cats: ["podwojne"],                                     desc: "nr, 31" },
  { img: n17, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 32" },
  { img: n18, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 33" },
  { img: n19, type: "Grobowiec",                 cats: ["Grobowiec"],                                     desc: "nr, 34" },
  { img: n20, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 35" },
  { img: n21, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 36" },
  { img: n22, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 37" },
  { img: n23, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 38" },
  { img: n24, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 39" },
  { img: n25, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 40" },
  { img: n26, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 41" },
  { img: n27, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 42" },
  { img: n28, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 43" },
  { img: n29, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 44" },
  { img: n30, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 45" },
  { img: n31, type: "Grobowiec",                 cats: ["Grobowiec"],                                     desc: "nr, 46" },
  { img: n32, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 47" },
  { img: n33, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 48" },
  { img: n34, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 49" },
  { img: n35, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 50" },
  { img: n36, type: "Nagrobek podwójny",          cats: ["podwojne"],                                     desc: "nr, 51" },
  { img: n37, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 52" },
  { img: n38, type: "Grobowiec",                 cats: ["Grobowiec"],                                     desc: "nr, 53" },
  { img: n39, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 54" },
  { img: n40, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 55" },
  { img: n41, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                                   desc: "nr, 56" },
];

const FILTERS: { key: "wszystkie" | Cat; label: string }[] = [
  { key: "wszystkie", label: "Wszystkie" },
  { key: "pojedyncze", label: "Pojedyncze" },
  { key: "podwojne", label: "Podwójne" },
  { key: "Naprawy/Renowacja", label: "Naprawy/Renowacja" },
  { key: "dzieciece", label: "Dziecięce" },
  { key: "liternictwo/galatria/grawery", label: "liternictwo/galatria/grawery" },
  { key: "Grobowiec", label: "Grobowiec" },
];

function GaleriaPage() {
  const search = Route.useSearch();
  const [active, setActive] = useState<typeof FILTERS[number]["key"]>(search.kategoria ?? "wszystkie");

  const filtered = useMemo(
    () => active === "wszystkie" ? items : items.filter((it) => it.cats.includes(active as Cat)),
    [active]
  );

  return (
    <PageWrap>
      <section className="granite-texture granite-noise py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-gold">Galeria</span>
          <h1 className="mt-4 font-display text-4xl text-white md:text-6xl">Nasze realizacje</h1>
          <p className="mx-auto mt-6 max-w-xl text-white/70">Wybór nagrobków i renowacji wykonanych w Poznaniu i Wielkopolsce.</p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`rounded-sm border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                  active === f.key ? "border-gold bg-gold text-granite" : "border-border bg-card text-granite-soft hover:border-gold hover:text-granite"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((it, i) => (
                <motion.figure
                  key={it.img + it.type + i}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group overflow-hidden border border-border bg-card transition-all hover:border-gold hover:shadow-xl"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-granite">
                    <img src={it.img} alt={`${it.type} — realizacja NAGROBEX Poznań, nagrobki granitowe`} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="border-t border-border p-5">
                    <h3 className="font-display text-lg text-granite">{it.type}</h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">{it.desc}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </div>

          <p className="mt-8 text-center font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Galeria aktualizowana na bieżąco
          </p>

          <div className="mt-20 border border-border bg-sandstone p-8 text-center md:p-12">
            <h2 className="font-display text-2xl text-granite md:text-3xl">
              Masz zdjęcie nagrobka, który Ci się podoba?
            </h2>
            <p className="mt-3 text-foreground/75">Przynieś je — odwzorujemy go dla Ciebie.</p>
            <Link to="/kontakt" className="mt-6 inline-flex items-center gap-2 rounded-sm bg-granite px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-white hover:bg-gold hover:text-granite">
              Skontaktuj się <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageWrap>
  );
}
