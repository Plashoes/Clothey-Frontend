import { useEffect } from "react";
import Search from "./Search";
import Features from "./Features";
import FeaturesSmall from "./FeaturesSmall";
import Footer from "./Footer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Contact() {
  useEffect(() => {
    document.title = `Clothy | Contact`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Search />
      <div className="contaner mx-auto px-6 py-12 bg-white">
        <h1 className="text-center text-[#212529] font-semibold text-5xl xl:text-7xl mb-6">Contact</h1>
      </div>
      <div className="container mx-auto px-6 md:px-8 xl:px-28 py-12 bg-[#f1f1ef] md:flex justify-center items-center gap-16 mb-6">
        <ul className="text-center mb-16 md:mb-0 flex flex-col md:border-r-[1px] border-[#dddddd]">
          <li className="px-4 pb-8 border-b-2 border-[#e4e6e7] md:flex items-start gap-4 ">
            <p className="">
              <i className="fa-solid fa-mobile-screen text-[#6e7051] mb-4"></i>
            </p>
            <div className="md:text-left">
              <h4 className="text-[#212529] text-lg font-semibold mb-2">Products & order</h4>
              <p className="text-sm md:text-lg text-[#97a1b1]">(+1) 123-456-7890</p>
              <p className="text-sm md:text-lg text-[#97a1b1]">available 24/7</p>
            </div>
          </li>
          <li className="px-4 py-8  border-b-2 border-[#e4e6e7] md:flex items-start gap-4 ">
            <p className="">
              <i className="fa-solid fa-circle-info text-[#6e7051] mb-4"></i>
            </p>
            <div className="md:text-left">
              <h4 className="text-[#212529] text-lg font-semibold mb-2">Info & enquiries</h4>
              <p className="text-sm md:text-lg text-[#97a1b1]">(+1) 123-456-7890</p>
              <p className="text-sm md:text-lg text-[#97a1b1]">available 24/7</p>
            </div>
          </li>
          <li className="px-4 py-8 border-b-2 border-[#e4e6e7] md:flex items-start gap-4 ">
            <p className="">
              <i className="fa-solid fa-location-dot text-[#6e7051] mb-4"></i>
            </p>
            <div className="md:text-left">
              <h4 className="text-[#212529] text-lg font-semibold mb-2">Store locator</h4>
              <p className="text-sm md:text-lg text-[#97a1b1]">(+1) 123-456-7890</p>
              <p className="text-sm md:text-lg text-[#97a1b1]">available 24/7</p>
            </div>
          </li>
          <li className="md:text-left px-4 py-8 border-b-2 md:border-none border-[#e4e6e7]">
            <h4 className="text-[#212529] text-base font-semibold mb-2">STAY IN TOUCH</h4>
            <p className="">
              <i className="fa-brands fa-facebook text-[#6e7051] md:text-lg"></i>
              <i className="fa-brands fa-twitter text-[#6e7051] md:text-lg mx-4"></i>
              <i className="fa-brands fa-youtube text-[#6e7051] md:text-lg"></i>
            </p>
          </li>
        </ul>
        <div className="md:w-[50%]">
          <div className="flex flex-col gap-2 mb-6">
            <span className="text-[#9da9b3]">Name</span>
            <input className="py-2 border-[1px] border-[#dddddd]" type="text" />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <span className="text-[#9da9b3]">Email</span>
            <input className="py-2 border-[1px] border-[#dddddd]" type="text" />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <span className="text-[#9da9b3]">Comment Or Message</span>
            <textarea className="border-[1px] border-[#dddddd]" name="" id="" cols="30" rows="5"></textarea>
          </div>
          <button className="text-white font bold py-2 px-8 bg-[#6e7051] hover:bg-[#212529] duration-300">SEND MESSAGE</button>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-16 py-12 bg-white">
        <h1 className="text-center text-[#212529] font-semibold text-3xl md:text-4xl xl:text-5xl mb-6 lg:w-[70%] lg:mx-auto">Frequently Asked Questions</h1>
        <p className="text-[#979a9b] md:text-lg text-center pb-10 border-b-[1px] border-[#dddddd] mb-6 lg:w-[70%] lg:mx-auto">Purus amet scelerisque nisl nibh felis massa a enim gravida</p>
        <div className="lg:w-[70%] lg:mx-auto">
          <Accordion className="group">
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography className="text-[#979a9b] group-hover:text-[#212529] duration-300">Quam ligula tristique sed leo nunc aenean amet</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-[#979a9b]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="group">
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography className="text-[#979a9b] group-hover:text-[#212529] duration-300">Tortor eget a a tincidunt est viverra turpis</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-[#979a9b]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="group">
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography className="text-[#979a9b] group-hover:text-[#212529] duration-300">Quis cras urna diam id nec amet</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-[#979a9b]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="group">
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography className="text-[#979a9b] group-hover:text-[#212529] duration-300">Id congue bibendum velit blandit massa elementum</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-[#979a9b]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <Features />
      <FeaturesSmall />
      <Footer />
    </>
  );
}

export default Contact;
