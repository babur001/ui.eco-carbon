import { useState } from "react"
import { Plus, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EditableTable } from "@/components/editable-table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TeamMember {
  id: string
  region: string
  name: string
  phone: string
}

const regions = [
  "North America",
  "South America",
  "Europe",
  "Asia Pacific",
  "Middle East",
  "Africa",
  "Australia",
  "Central Asia",
  "Southeast Asia",
  "Eastern Europe",
  "Western Europe",
  "Caribbean",
]

const initialMembers: TeamMember[] = [
  { id: "1", region: "North America", name: "John Smith", phone: "+1-555-0101" },
  { id: "2", region: "Europe", name: "Marie Dubois", phone: "+33-1-23-45-67-89" },
  { id: "3", region: "Asia Pacific", name: "Hiroshi Tanaka", phone: "+81-3-1234-5678" },
  { id: "4", region: "South America", name: "Carlos Rodriguez", phone: "+55-11-9876-5432" },
  { id: "5", region: "Africa", name: "Amara Okafor", phone: "+234-1-234-5678" },
  { id: "6", region: "Australia", name: "Sarah Johnson", phone: "+61-2-9876-5432" },
]

export function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>(initialMembers)
  const [selectedRegion, setSelectedRegion] = useState<string>("all")

  const columns = [
    { key: "region", label: "Region", editable: true },
    { key: "name", label: "Name", editable: true },
    { key: "phone", label: "Phone", editable: true },
  ]

  const handleCellUpdate = (id: string, field: string, value: string) => {
    setMembers((prev) => prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
  }

  const handleAddMember = () => {
    const newMember: TeamMember = {
      id: Date.now().toString(),
      region: "North America",
      name: "New Member",
      phone: "+1-555-0000",
    }
    setMembers((prev) => [...prev, newMember])
  }

  const filteredMembers =
    selectedRegion === "all" ? members : members.filter((member) => member.region === selectedRegion)

  const membersByRegion = regions.map((region) => ({
    region,
    count: members.filter((member) => member.region === region).length,
  }))

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Team Management</h1>
          <p className="text-muted-foreground">Manage team members across all regions</p>
        </div>
        <Button onClick={handleAddMember}>
          <Plus className="mr-2 h-4 w-4" />
          Add Member
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{members.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Regions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{membersByRegion.filter((r) => r.count > 0).length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Largest Region</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-bold">
              {
                membersByRegion.reduce((max, region) => (region.count > max.count ? region : max), membersByRegion[0])
                  .region
              }
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Coverage</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round((membersByRegion.filter((r) => r.count > 0).length / regions.length) * 100)}%
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Double-click on any cell to edit member details directly</CardDescription>
            </div>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region} ({membersByRegion.find((r) => r.region === region)?.count || 0})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <EditableTable data={filteredMembers} columns={columns} onCellUpdate={handleCellUpdate} />
        </CardContent>
      </Card>
    </div>
  )
}
