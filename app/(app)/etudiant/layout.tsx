import { AppSidebar } from "@/components/app-sidebar-enseignant"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function EtudiantLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}

