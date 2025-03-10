# generates sitemaps for SEO
from datetime import datetime
from django.urls import reverse
from django.contrib.sitemaps import Sitemap
from django.utils.text import slugify

# dont forget to update site name on the admin site app

class StaticSitemap(Sitemap):

    changefreq = 'weekly'
    priority = 0.9
    protocol = 'https'

    def items(self):
        # Define a list of your static URLs
        return [
            "home",
            "about",
            "about-details",
            "landing",
            "services",
            "web-development",
            "social-media",
            "marketing",
            "consulting",
            "maintenance",
            "graphic-design",
            "portfolio",
            "cpanda-website",
            "kneadsweets-website",
            "prcc-dashboard",
            "cafe-ignacio",
            "guayaba",
            "jardin",
            "metaltela",
        ]

    def location(self, item):
        return reverse(item)

    # def lastmod(self, item):
    #     # Define last modified dates for each URL
    #     last_modified_dates = {
    #         "website": datetime(2024, 4, 30),
    #     }
    #     return last_modified_dates.get(item)