import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-8 bg-green-100">
        <h1 className="text-4xl font-bold">Plant Tracker</h1>
        <p> Here is a simple way to see all of the plants we have at home ! </p>
        <p> All of these plants can be somewhat hard to manage, so hopefully this simplifies everything ^_^</p>
      </div>
      <div>
        <p> We can add new plants, add pictures and their location, and see when they are watered and how often they must be watered !</p>
      </div>
    </div>
  );
}
