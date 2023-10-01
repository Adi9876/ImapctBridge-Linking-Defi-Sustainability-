import { useRouter } from "next/router";


const ProjectRegistration = () => {
  const router = useRouter();
  const { authToken } = router.query;

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-t from-black to-violet-950">
      <div className="w-1/3 max-md:w-2/3 max-sm:w-11/12 animate-fade-in-up bg-gradient-to-t from-black to-violet-900 rounded-3xl shadow-lg p-6 max-sm:p-4">
        <div>
          <h1 className="text-white text-2xl font-semibold max-sm:text-xl">Project Registration</h1>

          
        </div>
      </div>
    </div>
  )
};

export default ProjectRegistration;