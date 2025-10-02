import { Helmet } from "react-helmet-async";
import { FileText, TrendingUp, AlertCircle, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const IncomeDisclosure = () => {
  const earningsData = [
    { rank: "Rep", hours: "2", percent: "92.50%", income: "$12,960", active: "12" },
    { rank: "Bronze Builder", hours: "5", percent: "3.48%", income: "$56,166", active: "12" },
    { rank: "Silver Builder", hours: "7", percent: "1.30%", income: "$80,464", active: "12" },
    { rank: "Gold Builder", hours: "15", percent: "2.22%", income: "$505,568", active: "12" },
    { rank: "Director - One Star", hours: "30", percent: "0.35%", income: "$604,090", active: "12" },
    { rank: "Director - Two Star", hours: "40", percent: "0.07%", income: "$401,236", active: "12" },
    { rank: "Director - Three Star", hours: "40-60", percent: "0.06%", income: "$745,209", active: "12" },
    { rank: "Director - Four Star", hours: "40-60", percent: "0.02%", income: "$516,279", active: "12" },
    { rank: "Director - Five Star", hours: "50-60", percent: "0.01%", income: "$872,432", active: "12" },
    { rank: "Director - Six Star", hours: "60+", percent: "<0.01%", income: "$1,188,667", active: "12" },
  ];

  return (
    <>
      <Helmet>
        <title>Income Disclosure Statement 2024 | PlanNet Marketing Income Transparency</title>
        <meta name="description" content="Complete 2024 income disclosure for PlanNet Marketing Independent Representatives. See actual earnings data, percentages, and what it takes to succeed in the travel business." />
        <meta name="keywords" content="income disclosure, earnings statement, PlanNet Marketing income, travel agent earnings, commission transparency" />
        <link rel="canonical" href="https://pathwaytraveladvisors.com/income-disclosure" />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              2024 Transparency Report
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Income Disclosure Statement
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real earnings data from PlanNet Marketing Independent Representatives in 2024
            </p>
          </div>

          {/* Alert Box */}
          <Alert className="mb-8 border-secondary/30 bg-secondary/5">
            <AlertCircle className="h-4 w-4 text-secondary" />
            <AlertDescription className="text-sm">
              <strong>Important:</strong> These earnings are not guarantees. Success requires dedication, effort, and time. 
              Individual results vary based on commitment, skills, and market conditions.
            </AlertDescription>
          </Alert>

          {/* Key Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-2xl">21.06%</CardTitle>
                <CardDescription>Earned Commissions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Of all Independent Representatives earned commission or override income in 2024
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-2xl">$3,211</CardTitle>
                <CardDescription>Average for Earners</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Annual average for those who earned commissions (active participants)
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-2xl">$1,006</CardTitle>
                <CardDescription>Overall Average</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Including all enrolled representatives, both active and inactive
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Earnings Table */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                2024 Earnings by Rank Level
              </CardTitle>
              <CardDescription>
                Annualized average income for Independent Representatives active for 12 months
              </CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 text-sm font-semibold">Rank</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold">Avg Hours/Week</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold">% of Active IRs</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold">Annualized Income</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold">Months Active</th>
                  </tr>
                </thead>
                <tbody>
                  {earningsData.map((row, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                      <td className="py-3 px-2 font-medium">{row.rank}</td>
                      <td className="py-3 px-2 text-muted-foreground">{row.hours}</td>
                      <td className="py-3 px-2 text-muted-foreground">{row.percent}</td>
                      <td className="py-3 px-2 font-semibold text-secondary">{row.income}</td>
                      <td className="py-3 px-2 text-muted-foreground">{row.active}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <Card className="mb-8 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-accent" />
                Important Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold mb-2">Active Independent Representative Definition</h3>
                <p className="text-muted-foreground">
                  An Active IR is someone enrolled with PlanNet Marketing with a $19.95 initial fee and $19.95 monthly fee. 
                  These statistics cover IRs enrolled from January 1, 2024 to December 31, 2024.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Costs & Investment</h3>
                <p className="text-muted-foreground">
                  The average IR spends between $19.95 and $239.40 annually in monthly administration fees. 
                  Additional business expenses may include training, marketing, and professional development.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Success Factors</h3>
                <p className="text-muted-foreground">
                  Success in this business requires personal effort, dedication, time investment, continuous learning, 
                  and consistent activity. Higher earnings typically correlate with more hours worked and sustained commitment.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">No Guarantees</h3>
                <p className="text-muted-foreground">
                  The earnings shown are averages and not guarantees of income. Individual results vary significantly 
                  based on effort, skills, market conditions, and business approach.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Download PDF */}
          <Card className="text-center">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Complete Official Statement</h3>
              <p className="text-muted-foreground mb-6">
                Download the complete 2024 PlanNet Marketing Income Disclosure Statement
              </p>
              <Button asChild className="gap-2">
                <a href="/Income_Disclosure.pdf" download="PlanNet_Marketing_Income_Disclosure_2024.pdf">
                  <Download className="w-4 h-4" />
                  Download Full PDF
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">Ready to Learn More?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Schedule a clarity call to discuss your goals, the business opportunity, 
              and whether this path is right for you.
            </p>
            <Button size="lg" asChild>
              <a href="https://calendly.com/catina-perkins" target="_blank" rel="noopener noreferrer">
                Book Your 15-Minute Clarity Call
              </a>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default IncomeDisclosure;
