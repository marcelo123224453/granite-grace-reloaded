cat > /mnt/user-data/outputs/galeria.tsx << 'ENDOFFILE'
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { z } from "zod";
import { PageWrap, SectionTitle } from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";

// ── Stare zdjęcia ──
import nOld1  from "@/assets/nagrobek-1.jpg";
import nOld2  from "@/assets/nagrobek-2.jpg";
import nOld3  from "@/assets/nagrobek-3.jpg";
import nOld4  from "@/assets/nagrobek-4.jpg";
import nOld5  from "@/assets/nagrobek-5.jpg";
import nOld6  from "@/assets/673414230_992487589976643_5370561090871691160_n.jpg";
import nOld7  from "@/assets/569516638_849008100991260_4224958326701579055_n.jpg";
import nOld8  from "@/assets/565679113_846124567946280_8598260601751854206_n.jpg";
import nOld9  from "@/assets/564610504_842136365011767_6562503235974255662_n.jpg";
import nOld10 from "@/assets/703844548_1017523120806423_3790274995248193897_n (2).jpg";
import nOld11 from "@/assets/494141487_710766191482119_6563128306248426608_n.jpg";
import nOld12 from "@/assets/552605846_823846770174060_2509920610635215638_n.jpg";
import nOld13 from "@/assets/645398866_1540871334707128_799992057582408873_n (1).jpg";
import nDetal    from "@/assets/nagrobek-detal.jpg";
import nWarsztat from "@/assets/nagrobek-warsztat.jpg";

// ── Nowe zdjęcia IMG_6xxx ──
import n1  from "@/assets/IMG_6006.HEIC";
import n2  from "@/assets/IMG_6008.HEIC";
import n3  from "@/assets/IMG_6009.HEIC";
import n4  from "@/assets/IMG_6015.HEIC";
import n5  from "@/assets/IMG_6016.HEIC";
import n6  from "@/assets/IMG_6011.JPG";
import n7  from "@/assets/IMG_6012.JPG";
import n8  from "@/assets/IMG_6013.JPG";
import n9  from "@/assets/IMG_6014.JPG";
import n10 from "@/assets/IMG_6017.HEIC";
import n11 from "@/assets/IMG_6019.HEIC";
import n12 from "@/assets/IMG_6020.HEIC";
import n13 from "@/assets/IMG_6021.HEIC";
import n14 from "@/assets/IMG_6022.HEIC";
import n15 from "@/assets/IMG_6023.HEIC";
import n16 from "@/assets/IMG_6018.JPG";
import n17 from "@/assets/IMG_6025.JPG";
import n18 from "@/assets/IMG_6026.JPG";
import n19 from "@/assets/IMG_6029.HEIC";
import n20 from "@/assets/IMG_6031.HEIC";
import n21 from "@/assets/IMG_6033.HEIC";
import n22 from "@/assets/IMG_6034.HEIC";
import n23 from "@/assets/IMG_6027.JPG";
import n24 from "@/assets/IMG_6028.JPG";
import n25 from "@/assets/IMG_6030.PNG";
import n26 from "@/assets/IMG_6032.JPG";
import n27 from "@/assets/IMG_6035.HEIC";
import n28 from "@/assets/IMG_6036.HEIC";
import n29 from "@/assets/IMG_6037.HEIC";
import n30 from "@/assets/IMG_6038.HEIC";
import n31 from "@/assets/IMG_6039.HEIC";
import n32 from "@/assets/IMG_6040.HEIC";
import n33 from "@/assets/IMG_6042.HEIC";
import n34 from "@/assets/IMG_6043.HEIC";
import n35 from "@/assets/IMG_6044.HEIC";
import n36 from "@/assets/IMG_6046.HEIC";
import n37 from "@/assets/IMG_6047.HEIC";
import n38 from "@/assets/IMG_6048.HEIC";
import n39 from "@/assets/IMG_6049.HEIC";
import n40 from "@/assets/IMG_6050.HEIC";
import n41 from "@/assets/IMG_6051.HEIC";
import n42 from "@/assets/IMG_6052.HEIC";
import n43 from "@/assets/8c6e237b-1af3-4b65-9fd8-d95c1d33134b.JPG";

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

// Klucz kategorii: 1=pojedyncze 2=podwojne 3=Naprawy/Renowacja 4=dzieciece 5=Grobowiec 6=liternictwo/galatria/grawery
const CAT: Record<number, Cat> = {
  1: "pojedyncze",
  2: "podwojne",
  3: "Naprawy/Renowacja",
  4: "dzieciece",
  5: "Grobowiec",
  6: "liternictwo/galatria/grawery",
};

const LABEL: Record<Cat, string> = {
  pojedyncze: "Nagrobek pojedynczy",
  podwojne: "Nagrobek podwójny",
  "Naprawy/Renowacja": "Naprawa / Renowacja",
  dzieciece: "Nagrobek dziecięcy",
  Grobowiec: "Grobowiec",
  "liternictwo/galatria/grawery": "Liternictwo / Galanteria / Grawery",
};

const items: { img: string; cat: Cat; desc: string }[] = [
  { img: nOld1,    cat: CAT[5], desc: "nr 1"  },  // 5 = Grobowiec
  { img: nOld10,   cat: CAT[3], desc: "nr 2"  },  // 3 = Naprawy/Renowacja
  { img: nOld6,    cat: CAT[1], desc: "nr 3"  },  // 1 = pojedyncze
  { img: nOld7,    cat: CAT[3], desc: "nr 4"  },  // 3
  { img: nOld8,    cat: CAT[2], desc: "nr 5"  },  // 2 = podwojne
  { img: nOld9,    cat: CAT[1], desc: "nr 6"  },  // 1
  { img: nOld2,    cat: CAT[2], desc: "nr 7"  },  // 2
  { img: nOld3,    cat: CAT[1], desc: "nr 8"  },  // 1
  { img: nOld4,    cat: CAT[5], desc: "nr 9"  },  // 5
  { img: nOld5,    cat: CAT[1], desc: "nr 10" },  // 1
  { img: nOld11,   cat: CAT[5], desc: "nr 11" },  // 5
  { img: nOld12,   cat: CAT[1], desc: "nr 12" },  // 1
  { img: n43,      cat: CAT[5], desc: "nr 13" },  // 5
  { img: nDetal,   cat: CAT[6], desc: "nr 14" },  // 6
  { img: nWarsztat,cat: CAT[1], desc: "nr 15" },  // 1
  { img: n1,       cat: CAT[2], desc: "nr 16" },  // 2
  { img: n2,       cat: CAT[1], desc: "nr 17" },  // 1
  { img: n3,       cat: CAT[1], desc: "nr 18" },  // 1
  { img: n4,       cat: CAT[1], desc: "nr 19" },  // 1
  { img: n5,       cat: CAT[1], desc: "nr 20" },  // 1
  { img: n6,       cat: CAT[1], desc: "nr 21" },  // 1
  { img: n7,       cat: CAT[1], desc: "nr 22" },  // 1
  { img: n8,       cat: CAT[2], desc: "nr 23" },  // 2
  { img: n9,       cat: CAT[1], desc: "nr 24" },  // 1
  { img: n10,      cat: CAT[1], desc: "nr 25" },  // 1
  { img: n11,      cat: CAT[1], desc: "nr 26" },  // 1
  { img: n12,      cat: CAT[1], desc: "nr 27" },  // 1
  { img: n13,      cat: CAT[2], desc: "nr 28" },  // 2
  { img: n14,      cat: CAT[2], desc: "nr 29" },  // 2
  { img: n15,      cat: CAT[2], desc: "nr 30" },  // 2
  { img: n16,      cat: CAT[2], desc: "nr 31" },  // 2
  { img: n17,      cat: CAT[1], desc: "nr 32" },  // 1
  { img: n18,      cat: CAT[1], desc: "nr 33" },  // 1
  { img: n19,      cat: CAT[5], desc: "nr 34" },  // 5
  { img: n20,      cat: CAT[1], desc: "nr 35" },  // 1
  { img: n21,      cat: CAT[1], desc: "nr 36" },  // 1
  { img: n22,      cat: CAT[1], desc: "nr 37" },  // 1
  { img: n23,      cat: CAT[1], desc: "nr 38" },  // 1
  { img: n24,      cat: CAT[1], desc: "nr 39" },  // 1
  { img: n25,      cat: CAT[1], desc: "nr 40" },  // 1
  { img: n26,      cat: CAT[1], desc: "nr 41" },  // 1
  { img: n27,      cat: CAT[1], desc: "nr 42" },  // 1
  { img: n28,      cat: CAT[1], desc: "nr 43" },  // 1
  { img: n29,      cat: CAT[1], desc: "nr 44" },  // 1
  { img: n30,      cat: CAT[1], desc: "nr 45" },  // 1
  { img: n31,      cat: CAT[5], desc: "nr 46" },  // 5
  { img: n32,      cat: CAT[1], desc: "nr 47" },  // 1
  { img: n33,      cat: CAT[1], desc: "nr 48" },  // 1
  { img: n34,      cat: CAT[1], desc: "nr 49" },  // 1
  { img: n35,      cat: CAT[1], desc: "nr 50" },  // 1
  { img: n36,      cat: CAT[2], desc: "nr 51" },  // 2
  { img: n37,      cat: CAT[1], desc: "nr 52" },  // 1
  { img: n38,      cat: CAT[5], desc: "nr 53" },  // 5
  { img: n39,      cat: CAT[1], desc: "nr 54" },  // 1
  { img: n40,      cat: CAT[1], desc: "nr 55" },  // 1
  { img: n41,      cat: CAT[1], desc: "nr 56" },  // 1
];

const FILTERS: { key: "wszystkie" | Cat; label: string }[] = [
  { key: "wszystkie",                    label: "Wszystkie" },
  { key: "pojedyncze",                   label: "Pojedyncze" },
  { key: "podwojne",                     label: "Podwójne" },
  { key: "Naprawy/Renowacja",            label: "Naprawy / Renowacja" },
  { key: "dzieciece",                    label: "Dziecięce" },
  { key: "Grobowiec",                    label: "Grobowiec" },
  { key: "liternictwo/galatria/grawery", label: "Liternictwo / Galanteria / Grawery" },
];

function GaleriaPage() {
  const search = Route.useSearch();
  const [active, setActive] = useState<typeof FILTERS[number]["key"]>(search.kategoria ?? "wszystkie");

  const filtered = useMemo(
    () => active === "wszystkie" ? items : items.filter((it) => it.cat === active),
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
                  key={it.img + it.cat + i}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group overflow-hidden border border-border bg-card transition-all hover:border-gold hover:shadow-xl"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-granite">
                    <img src={it.img} alt={LABEL[it.cat]} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="border-t border-border p-5">
                    <h3 className="font-display text-lg text-granite">{LABEL[it.cat]}</h3>
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
ENDOFFILE
echo "done"
