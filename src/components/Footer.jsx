import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function FooterApp() {
  return (
    <div>
      <Footer container className="bg-gray-100 mt-48">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray">APPrende</h2>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="Sobre Nosotros" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">APPrende</Footer.Link>
                  <Footer.Link href="#">Contáctanos</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Síguenos" />
                <Footer.LinkGroup col> 
                  <Footer.Link href="https://www.instagram.com/" target="_blank">Instagram</Footer.Link>
                  <Footer.Link href="https://www.twitter.com/" target="_blank">Twitter</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Política de Privacidad</Footer.Link>
                  <Footer.Link href="#">Terminos &amp; Condiciones</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="https://github.com/luquiceno" by="Lucia" year={2024} target="_blank" />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="https://www.facebook.com/" icon={BsFacebook} target="_blank" />
              <Footer.Icon href="https://www.instagram.com/" icon={BsInstagram} target="_blank" />
              <Footer.Icon href="https://www.twitter.com/" icon={BsTwitter} target="_blank" />
              <Footer.Icon href="https://github.com/luquiceno/junior-grupo-frontend" icon={BsGithub} target="_blank" />
            </div>
          </div>
        </div>
      </Footer>
    </div>  
  )
}

export default FooterApp