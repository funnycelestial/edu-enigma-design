import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Users, Clock, BookOpen } from "lucide-react";

const classes = [
  {
    id: 1,
    name: "Mathematics 101",
    grade: "10-A",
    teacher: "Dr. Sarah Miller",
    students: 32,
    schedule: "Mon, Wed, Fri - 9:00 AM",
    subject: "Mathematics",
    room: "Room 201",
  },
  {
    id: 2,
    name: "Physics Advanced",
    grade: "11-B",
    teacher: "Prof. John Davis",
    students: 28,
    schedule: "Tue, Thu - 10:30 AM",
    subject: "Physics",
    room: "Lab 305",
  },
  {
    id: 3,
    name: "English Literature",
    grade: "10-A",
    teacher: "Ms. Emily Brown",
    students: 30,
    schedule: "Mon, Wed - 2:00 PM",
    subject: "English",
    room: "Room 103",
  },
  {
    id: 4,
    name: "Chemistry Lab",
    grade: "11-C",
    teacher: "Dr. Michael Wilson",
    students: 25,
    schedule: "Tue, Thu - 1:00 PM",
    subject: "Chemistry",
    room: "Lab 402",
  },
  {
    id: 5,
    name: "World History",
    grade: "9-A",
    teacher: "Mr. David Anderson",
    students: 35,
    schedule: "Mon, Wed, Fri - 11:00 AM",
    subject: "History",
    room: "Room 205",
  },
  {
    id: 6,
    name: "Computer Science",
    grade: "10-B",
    teacher: "Dr. Lisa Chen",
    students: 30,
    schedule: "Tue, Thu - 9:00 AM",
    subject: "Computer Science",
    room: "Computer Lab",
  },
];

const subjectColors: Record<string, string> = {
  Mathematics: "bg-primary",
  Physics: "bg-secondary",
  English: "bg-accent",
  Chemistry: "bg-success",
  History: "bg-warning",
  "Computer Science": "bg-gradient-primary",
};

export default function Classes() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Classes</h1>
          <p className="text-muted-foreground mt-1">View and manage all classes</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          <Plus className="mr-2 h-4 w-4" />
          Add Class
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((classItem) => (
          <Card key={classItem.id} className="transition-all duration-300 hover:shadow-card-hover">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div
                  className={`h-10 w-10 rounded-lg ${
                    subjectColors[classItem.subject] || "bg-gradient-primary"
                  } flex items-center justify-center`}
                >
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <Badge variant="outline">{classItem.grade}</Badge>
              </div>
              <CardTitle className="text-lg">{classItem.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{classItem.teacher}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{classItem.students} students</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{classItem.schedule}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{classItem.room}</span>
              </div>
              <div className="pt-2 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
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
