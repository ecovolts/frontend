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
import { Button } from '@/components/ui/layout/Button'

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
                  <Button
                    type="button"
                    size="icon"
                    className="bg-slate-200 text-amber-500 hover:bg-slate-800"
                  >
                    <Zap className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-amber-500" />
                  </Button>
                </ProjectMenu>
              </li>

              <li className="flex">
                <Button size="icon" asChild>
                  <Link href="/dashboard">
                    <LayoutDashboard className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                  </Link>
                </Button>
              </li>

              <li className="flex">
                <Button size="icon" asChild>
                  <Link href="/monitoramento">
                    <Activity className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                  </Link>
                </Button>
              </li>

              <li className="flex">
                <Button size="icon" asChild>
                  <Link href="/integracao">
                    <Boxes className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                  </Link>
                </Button>
              </li>

              <li className="flex">
                <Button size="icon" asChild>
                  <Link href="/relatorios">
                    <FileSpreadsheet className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                  </Link>
                </Button>
              </li>

              <li className="flex">
                <Button size="icon" asChild>
                  <Link href="/faturas">
                    <ScrollText className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                  </Link>
                </Button>
              </li>

              <li className="flex">
                <Button size="icon" asChild>
                  <Link href="/sus">
                    <HeartPulse className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                  </Link>
                </Button>
              </li>

              <li className="flex">
                <Button size="icon" asChild>
                  <Link href="/analise-financeira">
                    <LineChart className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                  </Link>
                </Button>
              </li>

              <li className="flex">
                <Button size="icon" asChild>
                  <Link href="/gestao-creditos">
                    <Coins className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                  </Link>
                </Button>
              </li>
            </ul>
          </div>

          <div className="flex">
            <ul className="flex w-full flex-col items-center justify-center gap-4">
              <li className="flex">
                <Button size="icon" asChild>
                  <Link href="/admin">
                    <Settings className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                  </Link>
                </Button>
              </li>
              <li className="flex">
                <SignOutButton>
                  <Button size="icon" className="hover:bg-red-500">
                    <LogOut className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                  </Button>
                </SignOutButton>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  )
}
