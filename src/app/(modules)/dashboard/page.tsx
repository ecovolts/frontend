import { Edit, Plus } from 'lucide-react'

import { Status } from '@/components/ux/Status'
import { Button } from '@/components/ui/layout/Button'
import { Welcome } from '@/components/ux/Welcome'
import { TableList } from '@/components/ux/TableList'

export default function Dashboard() {
  return (
    <main className="flex w-full flex-col items-start bg-white px-8 py-8 backdrop-blur">
      <div className="flex w-full flex-col space-y-8 overflow-y-auto">
        <section className="flex w-full items-center justify-between">
          <Welcome />

          <div id="sidemenu" className="flex items-center gap-2">
            <Button size="icon" className="bg-green-500 hover:bg-slate-200">
              <Plus className="h-5 w-5 text-zinc-50 group-hover:text-zinc-800" />
            </Button>

            <Button size="icon" className="bg-blue-300 hover:bg-slate-200">
              <Edit className="h-5 w-5 text-zinc-50 group-hover:text-zinc-800" />
            </Button>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 laptop:grid-cols-2 desktop:grid-cols-2">
          <article
            className="flex min-h-[230px] w-full rounded-md border
            border-zinc-200 p-5"
          >
            <h2 className="text-lg font-semibold">Infos</h2>
          </article>
          <article
            className="flex min-h-[230px] w-full flex-col gap-4 rounded-md
          border border-zinc-200 p-5"
          >
            <h2 className="text-lg font-semibold">Status</h2>
            <Status />
          </article>
        </section>

        <TableList />
      </div>
    </main>
  )
}
