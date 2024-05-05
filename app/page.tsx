import Top from "../components/top/top";
import SecondPart from "@/components/secondPart/secondPart";
import ThirdPart from "@/components/thirdPart/thirdPart";
import FourthPart from "@/components/fourthPart/fourthPart";
import FifthPart from "@/components/fifthPart/fifthPart";
import SixthPart from "@/components/sixthPart/sixthPart";
import Footer from "@/components/footer/footer";
import { ScreenSizeProvider } from "../context/ScreenSizeContext";
import { getData } from '../api/ip';

export default async function Home() {
  const ipData = await getData();
  console.log('IP data @@:', ipData);

  console.log('This will be logged on the server');
  
  return (
    <ScreenSizeProvider>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Top />

        <SecondPart />

        <ThirdPart />

        <FourthPart />

        <FifthPart />

        <SixthPart />

        <Footer />
      </main>
    </ScreenSizeProvider>
  );
}

