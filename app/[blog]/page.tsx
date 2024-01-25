import Badge from "@/components/Badge";
import Section from "@/components/Section";
import YoutubePlayer from "@/components/YoutubePlayer";
import blogs, { getBlog } from "@/data";
import React from "react";

export default function page({ params }: { params: { blog: string } }) {
  const content = getBlog(params.blog);
  if (!content) return "Não foi possível encontrar o blog solicitado";
  return (
    <Section>
      <div className="p-10 min-h-screen border-r  space-y-24">
        <div className="space-y-6">
          <div className="flex justify-between ">
            <span className="font-semibold font-mono text-zinc-700">
              Publicado em {content.date}
            </span>
            <Badge>{content.category?.name}</Badge>
          </div>
          <img
            src={content?.banner}
            className="max-h-[55vh] w-full rounded object-cover"
          />
          <h3 className="md:text-7xl text-5xl font-extrabold text-zinc-800 ">
            {content?.title}
          </h3>
        </div>
    {content.video && (
        <YoutubePlayer  url={content.video} />

    )}
        <div>
          Índice:
          <div className="flex flex-col gap-3">
            {content.body.map((section) => (
              <ul key={section.title}>
                <li className="font-semibold md:text-2xl text-xl hover:underline">
                  <a href={`#${section.title}`}>- {section.title}</a>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div>
          Conteúdo:
          <div className="flex flex-col gap-8">
            {content.body.map((section) => (
              <section id={section.title} key={section.title}>
                <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>

                <div className={section.image ? `flex flex-col  gap-12 ` : ""}>
                  <p className="text-xl">{section.text}</p>
                  {section.image && (
                    <img
                      src={section.image}
                      className="w-full max-w-[600px] aspect-video object-cover rounded"
                    />
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
