import Section from "@/components/Section";
import blogs, { getBlog } from "@/data";
import React from "react";

export default function page({ params }: { params: { blog: string } }) {
  const content = getBlog(params.blog);
  if (!content) return "Não foi possível encontrar o blog solicitado";
  return (
    <Section>
      <div className="grid grid-cols-[4fr_1fr]">
        <div className="p-10 min-h-screen border-r space-y-12">
          <div>
            <span>Publicado em {content.date}</span>
            <img
              src={content?.banner}
              className="max-h-[55vh] w-full rounded object-cover"
            />
            <span className="text-7xl font-extrabold text-zinc-800  space-y-4">
              {content?.title}
            </span>
          </div>
          <div>
            Índice:
            <div className="flex flex-col gap-3">
              {content.body.map((section) => (
                <ul key={section.title}>
                  <li className="font-semibold text-2xl hover:underline">
                    <a href={`/#${section.title}`}>- {section.title}</a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div>
            Conteúdo:
            <div className="flex flex-col gap-12">
              {content.body.map((section) => (
                <section id={section.title} key={section.title}>
                  <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>

                  <div className={section.image ?  `flex  gap-12 ${section.imagePos === 'left' ? 'flex-row-reverse' : '' }` : ''}>
                    <p className="text-xl">{section.text}</p>
                    <img src={section.image} className="w-full max-w-[400px] object-cover rounded"  />
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
        <div className="p-10">aaa</div>
      </div>
    </Section>
  );
}
