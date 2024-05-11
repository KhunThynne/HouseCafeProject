import Navbar from "@/components/Navbar";
import { Container } from "@mui/material";

export default function Template({ children }: { children: React.ReactNode }) {
    return <div>
        <Navbar/>
        <Container className="border min-h-[85vh] py-5 my-5">    
        {children}
        

        </Container>
    
        
        </div>
  }