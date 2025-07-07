import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { userSchema } from "@/schema/zod";
import { toast } from "sonner";
import { api } from "@/lib/axios/api";
import { handleApiError } from "@/lib/axios/handleApiError";

type UserFormData = z.infer<typeof userSchema>;

export default function AddUserPages() {
  const departments = [
    "Engineering",
    "Marketing",
    "Sales",
    "Human Resources",
    "Finance",
    "Operations",
    "Customer Support",
  ];

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      department: "",
    },
  });

  const onSubmit = async(data: UserFormData) => {
    try{
      await api.post("/users", {
        name: data.name,
        email: data.email,
        phone: data.phone,
        department: data.department,
        isActive: "active"
      })

      reset() // pindah diatas api.post untuk keamanan, meski UX kurang
      toast.success("User added sucessfully")
    }catch(err) {
      const message = handleApiError(err)
      toast.error(message)
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="w-full h-fit flex justify-center py-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              User Information Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div>
                <Label className="pb-2" htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="Enter your full name"
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label className="pb-2" htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="Enter your email"
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <Label className="pb-2" htmlFor="phone">Phone Number (Indonesia)</Label>
                <div className="relative">
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="+62 812-3456-7890"
                    className={`pl-12 ${errors.phone ? "border-red-500" : ""}`}
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500">🇮🇩</span>
                  </div>
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Department */}
              <div>
                <Label className="pb-2" htmlFor="department">Department</Label>
                <Select
                  onValueChange={(value) => setValue("department", value)}
                  defaultValue=""
                >
                  <SelectTrigger
                    className={errors.department ? "border-red-500 cursor-pointer" : "cursor-pointer"}
                  >
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept} className="cursor-pointer">
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.department && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.department.message}
                  </p>
                )}
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full cursor-pointer">
                  Submit
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
