import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react"
import { Mail } from "lucide-react"
import { ChevronLeft } from "lucide-react"
import { Loader2 } from "lucide-react"

const Login = () => {
  return (
    <div>
      <div className="font-roboto flex h-screen flex-col md:flex-row">
        {/* <div className="w-full bg-gray-900 md:w-7/12">*/}

        <div className="w-full bg-[url('../src/img/UNAB-2.png')] bg-cover bg-no-repeat md:w-7/12">
          <div className="flex h-screen flex-col items-center justify-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  className="borde mx-4 my-2 h-8 w-20 hover:bg-white/20"
                  variant="ghost"
                  size="icon"
                >
                  <AlignJustify className="h-4 w-4" color="white" />
                </Button>
              </SheetTrigger>
              <SheetContent side={"top"} className="w-7/12 bg-white">
                <SheetHeader>
                  <SheetTitle>
                    <h2 className="titulo-Login -m-6 mb-2 bg-gray-900 p-6 text-3xl font-semibold text-white">
                      Accede con tu cuenta Microsoft 365 / UNAB
                    </h2>
                  </SheetTitle>
                  <SheetDescription>
                    <p className="subtitulo-Login text-base text-gray-900">
                      Una vez que ingreses, tendrás la oportunidad de acceder a
                      un completo registro de tu progreso académico. Esto te
                      permitirá observar de manera detallada las asignaturas que
                      has completado con éxito, así como las que todavía estás
                      cursando o que tienes pendientes de aprobación. Este
                      sistema brinda una valiosa visión panorámica de tu
                      rendimiento académico, lo que te permitirá tomar
                      decisiones más informadas en cuanto a tu plan de estudios
                      y tu interacción con las materias que te esperan en tu
                      carrera.
                    </p>
                    <p className="subtitulo-Login py-2 text-base text-gray-900">
                      Puedes utilizar esta herramienta para evaluar tu
                      desarrollo y tener un control completo de tu trayectoria
                      educativa.
                    </p>
                  </SheetDescription>
                </SheetHeader>

                <div className="mt-4 items-center justify-center bg-red-900 py-1"></div>
                <div className="mb-4 items-center justify-center bg-gray-900 py-2"></div>

                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit" className="bg-gray-900">
                      Entendido
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
            <h2 className="titulo-Login mb-4  text-5xl font-semibold text-white">
              Acceder UNAB
            </h2>
            <div className="w-11/12 rounded-lg bg-white p-8 shadow-lg md:w-1/2">
              <form>
                <div className="mt-4">
                  <p className="subtitulo-Login mb-2 text-xl">
                    Acceso Estudiante
                  </p>
                  <Button
                    disabled
                    className="h-12 w-full rounded-xl border border-transparent bg-gray-900 hover:border-sky-900 hover:bg-white hover:text-black md:h-10 md:w-full"
                  >
                    {/* <Mail className="mr-2 h-4 w-4" /> Office 365 */}
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Office 365
                  </Button>
                </div>

                <div className="mb-3 mt-6 flex items-center justify-center text-xs">
                  <p className="">O también...</p>
                </div>

                <div className="mb-4">
                  <p className="subtitulo-Login mb-2 text-xl">Vista Invitado</p>

                  <a
                    href="/malla"
                    className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-transparent bg-red-900 text-white hover:border-sky-900 hover:bg-white hover:text-black md:h-10 md:w-full"
                  >
                    Ingresar como invitado
                  </a>
                </div>
                <Separator className="mb-2 mt-6" orientation="horizontal" />
                <p className="mb-4 text-xs text-gray-400">
                  Debes estar registrado como estudiante UNAB para ingresar.
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="h-full w-5/12 bg-[url('../src/img/UNAB.png')] bg-cover bg-center bg-repeat ">
          {/* Contenido sobre imagen */}
        </div>
      </div>
    </div>
  )
}

export default Login
