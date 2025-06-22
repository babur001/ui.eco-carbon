"use client"

import { useState } from "react"
import { Plus, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EditableTable } from "@/components/editable-table"

interface Article {
  id: string
  title: string
  author: string
  status: string
  publishDate: string
  views: number
}

const initialArticles: Article[] = [
  {
    id: "1",
    title: "Getting Started with React",
    author: "John Doe",
    status: "Published",
    publishDate: "2024-01-15",
    views: 1250,
  },
  {
    id: "2",
    title: "Advanced TypeScript Tips",
    author: "Jane Smith",
    status: "Draft",
    publishDate: "2024-01-20",
    views: 0,
  },
  {
    id: "3",
    title: "Building Modern UIs",
    author: "Mike Johnson",
    status: "Published",
    publishDate: "2024-01-18",
    views: 890,
  },
  {
    id: "4",
    title: "State Management Guide",
    author: "Sarah Wilson",
    status: "Review",
    publishDate: "2024-01-22",
    views: 0,
  },
]

interface ArticlesPageProps {
  onCreateArticle: () => void
}

export function ArticlesPage({ onCreateArticle }: ArticlesPageProps) {
  const [articles, setArticles] = useState<Article[]>(initialArticles)

  const columns = [
    { key: "title", label: "Title", editable: true },
    { key: "author", label: "Author", editable: true },
    { key: "status", label: "Status", editable: true },
    { key: "publishDate", label: "Publish Date", editable: true },
    { key: "views", label: "Views", editable: false },
  ]

  const handleCellUpdate = (id: string, field: string, value: string) => {
    setArticles((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: field === "views" ? Number.parseInt(value) || 0 : value } : item,
      ),
    )
  }

  const totalArticles = articles.length
  const publishedArticles = articles.filter((a) => a.status === "Published").length
  const totalViews = articles.reduce((sum, article) => sum + article.views, 0)

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Articles</h1>
          <p className="text-muted-foreground">Manage your content articles</p>
        </div>
        <Button onClick={onCreateArticle}>
          <Plus className="mr-2 h-4 w-4" />
          Create Article
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalArticles}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{publishedArticles}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalViews.toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Articles List</CardTitle>
          <CardDescription>Double-click on any cell to edit article details directly</CardDescription>
        </CardHeader>
        <CardContent>
          <EditableTable data={articles} columns={columns} onCellUpdate={handleCellUpdate} />
        </CardContent>
      </Card>
    </div>
  )
}
