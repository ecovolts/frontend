import { Button } from '@/components/ui/layout/Button'
import { Edit, Plus } from 'lucide-react'

export default async function Dashboard() {
  return (
    <main className="flex h-screen w-full flex-col items-start bg-skin-fill-base pl-24 pr-8 pt-8">
      <div className="flex w-full flex-col space-y-8">
        <section className="flex w-full items-center justify-between">
          <div id="welcome" className="flex flex-col gap-2">
            <span className="text-xs">Bem-vindo, Diogo Soares</span>
            <h2 className="text-2xl font-bold">Portifólio</h2>
          </div>

          <div id="sidemenu" className="flex items-center gap-2">
            <Button size="icon" className="bg-green-500 hover:bg-slate-200">
              <Plus className="h-5 w-5 text-zinc-50 group-hover:text-zinc-800" />
            </Button>

            <Button size="icon" className="bg-blue-300 hover:bg-slate-200">
              <Edit className="h-5 w-5 text-zinc-50 group-hover:text-zinc-800" />
            </Button>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 laptop:grid-cols-2 desktop:grid-cols-2">
          <article
            className="flex min-h-[230px] w-full rounded-md border
            border-zinc-200 p-5"
          >
            <h2 className="text-sm font-semibold">Infos</h2>
          </article>
          <article
            className="flex min-h-[230px] w-full rounded-md border
          border-zinc-200 p-5"
          >
            <h2 className="text-sm font-semibold">Status</h2>
          </article>
        </section>

        <section className="flex w-full flex-1 flex-col divide-y-[.0625rem] divide-zinc-200 p-1">
          <div className="flex min-h-[80px] w-full bg-white p-2">Unidade 1</div>
          <div className="flex min-h-[80px] w-full bg-white p-2">Unidade 2</div>
          <div className="flex min-h-[80px] w-full bg-white p-2">Unidade 3</div>
        </section>
      </div>
    </main>
  )
}
