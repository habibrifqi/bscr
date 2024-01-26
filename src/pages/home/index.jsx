import FormInput from "../../Elements/Input";
import FormLogin from "../../Fragments/FormLogin";
const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen from-purple-900 via-indigo-800 to-indigo-500 bg-gradient-to-br">
        <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white border rounded-lg shadow-2xl">
          <div className="max-w-md mx-auto space-y-3">
            <FormLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
