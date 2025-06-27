import { Loader } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AdminApp() {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin-password-7788991233/translations");
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Loader className="animate-spin" size={40} />
    </div>
  );
}
