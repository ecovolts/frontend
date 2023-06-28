import { SignOutButton } from '@clerk/nextjs'
import {
  Activity,
  Boxes,
  Coins,
  FileSpreadsheet,
  HeartPulse,
  LayoutDashboard,
  LineChart,
  LogOut,
  ScrollText,
  Settings,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { ProjectMenu } from '../ProjectMenu'

export function Sidebar() {
  return (
    <>
      <aside
        className="fixed flex min-h-screen w-16 flex-col bg-gray-20 text-gray-50
        shadow-lg"
      >
        <div className="flex h-screen w-full flex-col items-center justify-between pb-24 pt-7">
          <div className="flex">
            <ul className="flex w-full flex-col items-center justify-center gap-4">
              <li className="flex">
                <ProjectMenu>
                  <button
                    className="group flex h-9 w-9 items-center justify-center rounded-md
                bg-slate-200 text-amber-500 transition-colors duration-150 ease-linear hover:bg-slate-800"
                  >
                    <Zap className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-amber-500" />
                  </button>
                </ProjectMenu>
              </li>

              <li className="flex">
                <Link
                  href="/dashboard"
                  className="group flex h-9 w-9 items-center justify-center rounded-md
            text-slate-500 transition-colors duration-150 ease-linear hover:bg-slate-500"
                >
                  <LayoutDashboard className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                </Link>
              </li>

              <li className="flex">
                <Link
                  href="/monitoramento"
                  className="group flex h-9 w-9 items-center justify-center rounded-md
            text-slate-500 transition-colors duration-150 ease-linear hover:bg-slate-500"
                >
                  <Activity className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                </Link>
              </li>

              <li className="flex">
                <Link
                  href="/integracao"
                  className="group flex h-9 w-9 items-center justify-center rounded-md
            text-slate-500 transition-colors duration-150 ease-linear hover:bg-slate-500"
                >
                  <Boxes className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                </Link>
              </li>

              <li className="flex">
                <Link
                  href="/relatorios"
                  className="group flex h-9 w-9 items-center justify-center rounded-md
            text-slate-500 transition-colors duration-150 ease-linear hover:bg-slate-500"
                >
                  <FileSpreadsheet className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                </Link>
              </li>

              <li className="flex">
                <Link
                  href="/faturas"
                  className="group flex h-9 w-9 items-center justify-center rounded-md
            text-slate-500 transition-colors duration-150 ease-linear hover:bg-slate-500"
                >
                  <ScrollText className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                </Link>
              </li>

              <li className="flex">
                <Link
                  href="/sus"
                  className="group flex h-9 w-9 items-center justify-center rounded-md
            text-slate-500 transition-colors duration-150 ease-linear hover:bg-slate-500"
                >
                  <HeartPulse className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                </Link>
              </li>

              <li className="flex">
                <Link
                  href="/analise-financeira"
                  className="group flex h-9 w-9 items-center justify-center rounded-md
            text-slate-500 transition-colors duration-150 ease-linear hover:bg-slate-500"
                >
                  <LineChart className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                </Link>
              </li>

              <li className="flex">
                <Link
                  href="/gestao-creditos"
                  className="group flex h-9 w-9 items-center justify-center rounded-md
            text-slate-500 transition-colors duration-150 ease-linear hover:bg-slate-500"
                >
                  <Coins className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex">
            <ul className="flex w-full flex-col items-center justify-center gap-4">
              <li className="flex">
                <Link
                  href="/admin"
                  className="group flex h-9 w-9 items-center justify-center rounded-md
                text-slate-500 transition-colors duration-150 ease-linear hover:bg-slate-500"
                >
                  <Settings className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                </Link>
              </li>
              <li className="flex">
                <SignOutButton>
                  <button
                    className="group flex h-9 w-9 items-center justify-center rounded-md
                  text-slate-500 transition-colors duration-150 ease-linear hover:bg-red-500"
                  >
                    <LogOut className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                  </button>
                </SignOutButton>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  )
}
