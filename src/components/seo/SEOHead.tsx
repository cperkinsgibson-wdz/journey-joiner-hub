import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schemaData?: object;
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  articleAuthor?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  speakableSelectors?: string[];
  faqSchema?: Array<{ question: string; answer: string }>;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://www.exploreearnrepeat.com/og-image.jpg",
  ogType = "website",
  schemaData,
  noindex = false,
  publishedTime,
  modifiedTime,
  articleAuthor,
  breadcrumbs,
  speakableSelectors = ["h1", "h2", ".qa-answer", ".tofu-content", ".mofu-content", ".bofu-content"],
  faqSchema
}: SEOHeadProps) => {
  const fullTitle = title.includes("Pathway Travel Advisors") ? title : `${title} | Pathway Travel Advisors`;
  const currentUrl = canonical || `https://www.pathwaytraveladvisors.com${window.location.pathname}`;
  
  // Enhanced organization schema for E-E-A-T
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pathway Travel Advisors",
    "alternateName": "Pathway Travel Advisors",
    "url": "https://www.pathwaytraveladvisors.com",
    "logo": "https://www.exploreearnrepeat.com/logo.png",
    "foundingDate": "2018",
    "founder": {
      "@type": "Person",
      "name": "Catina Perkins",
      "jobTitle": "Certified Travel Professional"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Baltimore",
      "addressRegion": "MD",
      "addressCountry": "US"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-410-555-0123",
        "contactType": "customer service",
        "email": "catina@exploreearnrepeat.com",
        "availableLanguage": "English",
        "areaServed": "US"
      },
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "url": "https://calendly.com/catina-perkins",
        "availableLanguage": "English"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/exploreearnrepeat",
      "https://www.instagram.com/exploreearnrepeat",
      "https://www.linkedin.com/company/exploreearnrepeat"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "PlanNet Marketing Partnership",
        "credentialCategory": "professional"
      }
    ],
    "serviceType": "Travel Agency Services",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "knowsAbout": [
      "Home-Based Travel Agency",
      "Travel Business Training",
      "Travel Industry Consulting",
      "Online Travel Booking"
    ]
  };

  // Breadcrumb schema if breadcrumbs provided
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url
    }))
  } : null;

  // FAQPage schema for AEO optimization
  const faqPageSchema = faqSchema ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqSchema.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // WebSite schema with site search for voice assistants
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Pathway Travel Advisors",
    "url": "https://www.pathwaytraveladvisors.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.exploreearnrepeat.com/qa?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Catina Perkins, Platinum Network Team" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={currentUrl} />
      
      {/* SEO Directives */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-image-preview:large" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Pathway Travel Advisors" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@exploreearnrepeat" />
      <meta name="twitter:creator" content="@catinaperkins" />
      
      {/* Additional Article Meta */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {articleAuthor && <meta property="article:author" content={articleAuthor} />}
      
      {/* Business/Local SEO */}
      <meta property="business:contact_data:locality" content="Baltimore" />
      <meta property="business:contact_data:region" content="MD" />
      <meta property="business:contact_data:country_name" content="United States" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch for External Resources */}
      <link rel="dns-prefetch" href="https://calendly.com" />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />
      
      {/* Organization Schema (Always included for E-E-A-T) */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {/* Page-specific Schema */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify({
            ...schemaData,
            speakable: {
              "@type": "SpeakableSpecification",
              "cssSelector": speakableSelectors
            }
          })}
        </script>
      )}
      
      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      
      {/* FAQPage Schema for AEO */}
      {faqPageSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqPageSchema)}
        </script>
      )}
      
      {/* WebSite Schema */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      
      {/* Google Tag Manager */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: '${fullTitle}',
            page_location: '${currentUrl}',
            custom_map: {'custom_parameter': 'funnel_stage'}
          });
        `}
      </script>
    </Helmet>
  );
};

export default SEOHead;