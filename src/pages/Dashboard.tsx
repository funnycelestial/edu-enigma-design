import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, BookOpen, ClipboardCheck } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const attendanceData = [
  { name: "Mon", present: 850, absent: 50 },
  { name: "Tue", present: 870, absent: 30 },
  { name: "Wed", present: 820, absent: 80 },
  { name: "Thu", present: 890, absent: 10 },
  { name: "Fri", present: 840, absent: 60 },
];

const gradeDistribution = [
  { name: "A", value: 320, color: "hsl(var(--success))" },
  { name: "B", value: 450, color: "hsl(var(--secondary))" },
  { name: "C", value: 280, color: "hsl(var(--accent))" },
  { name: "D", value: 120, color: "hsl(var(--warning))" },
  { name: "F", value: 50, color: "hsl(var(--destructive))" },
];

const recentActivities = [
  { action: "New student enrolled", student: "Emma Watson", time: "2 hours ago" },
  { action: "Grade updated", student: "John Smith", time: "3 hours ago" },
  { action: "Attendance marked", student: "Class 10-A", time: "5 hours ago" },
  { action: "Assignment submitted", student: "Sarah Johnson", time: "6 hours ago" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's your school overview.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Students"
          value="1,234"
          icon={Users}
          trend={{ value: "12%", isPositive: true }}
          iconColor="bg-gradient-primary"
        />
        <StatCard
          title="Total Teachers"
          value="87"
          icon={GraduationCap}
          trend={{ value: "3%", isPositive: true }}
          iconColor="bg-gradient-secondary"
        />
        <StatCard
          title="Total Classes"
          value="42"
          icon={BookOpen}
          trend={{ value: "5%", isPositive: false }}
          iconColor="bg-gradient-accent"
        />
        <StatCard
          title="Attendance Rate"
          value="94.2%"
          icon={ClipboardCheck}
          trend={{ value: "2%", isPositive: true }}
          iconColor="bg-gradient-to-br from-success to-success/80"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Bar dataKey="present" fill="hsl(var(--success))" radius={[8, 8, 0, 0]} />
                <Bar dataKey="absent" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Grade Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={gradeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {gradeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b last:border-0"
              >
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.student}</p>
                </div>
                <span className="text-sm text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
