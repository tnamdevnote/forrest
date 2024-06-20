import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";
import { client } from "../lib/sanity";

function About() {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["leadership"],
  //   queryFn: () => client.fetch(`*[_type=='leadership']`),
  // });

  return (
    <div>
      <Card />
    </div>
  );
}

export default About;
