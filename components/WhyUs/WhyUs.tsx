// components/WhyUs/WhyUs.tsx
import { RefObject } from "react"

type Props = {
  t1Ref: RefObject<HTMLDivElement | null>
  t2Ref: RefObject<HTMLDivElement | null>
  progressRef: RefObject<HTMLDivElement | null>
}

export default function WhyUs({ t1Ref, t2Ref, progressRef }: Props) {
  return (
    <section className="min-h-screen bg-white px-6 md:px-24" id="whyus">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-center min-h-screen">
        <div className="md:col-span-5 font-poppins font-semibold text-black
                        text-5xl md:text-[4vw] lg:text-[6vw] leading-[1.05] 
                        flex flex-col justify-end md:justify-center h-full">
          <span className="block ">
            <span className="headline-line block">Content,</span>
          </span>
          <span className="block ">
            <span className="headline-line block">Engineered.</span>
          </span>
        </div>

        <div className="lg:col-span-7 md:col-span-10 space-y-12 max-w-xl">
          <div
            className="relative min-h-20 md:min-h-30
                      font-manrope text-lg md:text-xl
                       text-neutral-700 leading-[1.4] md:leading-[1.35]"
          >
            <div ref={t1Ref} className="absolute inset-0">
              <p>Helping Coaches, Founders & Business Owners grow through</p>
              <p>strategy-first content systems built for scale.</p>
            </div>

            <div ref={t2Ref} className="absolute inset-0 text-wrap">
              <p>We transform ordinary moments into standout stories with</p>
              <p>visually striking videos tailored to your brand’s style.</p>
            </div>
          </div>

          <div className="h-2 w-full bg-neutral-200 rounded overflow-hidden">
            <div ref={progressRef} className="h-full bg-black w-0" />
          </div>

          <p className="text-sm uppercase tracking-wide text-neutral-500">
            Strategy-first content.
            Systems over virality.
            <br />
            Design that converts attention into leverage.
          </p>
        </div>
      </div>
    </section>
  )
}
