import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Mail, Phone, MapPin } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const students = [
  {
    id: 1,
    name: "Emma Watson",
    email: "emma.watson@school.edu",
    phone: "+1 234 567 8901",
    class: "10-A",
    grade: "A",
    status: "active",
    address: "123 Main St, City",
  },
  {
    id: 2,
    name: "John Smith",
    email: "john.smith@school.edu",
    phone: "+1 234 567 8902",
    class: "10-B",
    grade: "B+",
    status: "active",
    address: "456 Oak Ave, City",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    email: "sarah.johnson@school.edu",
    phone: "+1 234 567 8903",
    class: "9-A",
    grade: "A-",
    status: "active",
    address: "789 Pine Rd, City",
  },
  {
    id: 4,
    name: "Michael Brown",
    email: "michael.brown@school.edu",
    phone: "+1 234 567 8904",
    class: "11-C",
    grade: "B",
    status: "active",
    address: "321 Elm St, City",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    email: "lisa.anderson@school.edu",
    phone: "+1 234 567 8905",
    class: "10-A",
    grade: "A+",
    status: "active",
    address: "654 Maple Dr, City",
  },
  {
    id: 6,
    name: "David Wilson",
    email: "david.wilson@school.edu",
    phone: "+1 234 567 8906",
    class: "9-B",
    grade: "C+",
    status: "active",
    address: "987 Cedar Ln, City",
  },
];

export default function Students() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Students</h1>
          <p className="text-muted-foreground mt-1">Manage and view all enrolled students</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          <Plus className="mr-2 h-4 w-4" />
          Add Student
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => (
          <Card key={student.id} className="transition-all duration-300 hover:shadow-card-hover">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{student.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">Class {student.class}</p>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-gradient-secondary text-secondary-foreground"
                >
                  {student.grade}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground truncate">{student.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{student.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground truncate">{student.address}</span>
              </div>
              <div className="pt-2 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Profile
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
