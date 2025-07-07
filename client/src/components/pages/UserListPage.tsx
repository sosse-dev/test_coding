import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Loader2, Search } from "lucide-react";
import { Input } from "../ui/input";
import { api } from "@/lib/axios/api";
import { handleApiError } from "@/lib/axios/handleApiError";
import { toast } from "sonner";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  isActive: "active" | "inactive";
};

export default function UserListPage() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>();
  const [keyword, setKeyword] = useState("");

  const onSearch = async () => {
    if (!keyword) {
      toast.error("Search input is empty!");
    }

    const res = await api.get(`/users/search/${keyword}`);

    if (!res.data[0]) {
      toast.error("No user found!");
    }

    setUsers(res.data);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await api.get<User[]>("/users");
        setUsers(res.data);
      } catch (err) {
        const message = handleApiError(err);
        toast.error(message);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col gap-y-7 md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Users</h2>
          <div className="flex gap-x-2">
            <Input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="search"
            />
            <Button onClick={onSearch} className="cursor-pointer">
              <Search />
            </Button>
          </div>
        </div>

        {loading && (
          <div className="w-full flex justify-center pt-3 md:pt-0 pb-5">
            <Loader2 className="animate-spin" />
          </div>
        )}

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Active</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users?.map((user) => (
                  <TableRow key={user.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.department}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.isActive === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {user.isActive}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
