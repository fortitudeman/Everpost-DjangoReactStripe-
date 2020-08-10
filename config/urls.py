from django.conf import settings
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.contrib import admin
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('stripe_payments.urls')),
] 
urlpatterns += [re_path(r'^.*',TemplateView.as_view(template_name='index.html'))]




