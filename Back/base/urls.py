from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView
from . import views

urlpatterns = [
    path("login/", TokenObtainPairView.as_view()),
    path("about/", views.about),
    path("contact/", views.contact),
    path('register/', views.register),
    path('product/<pk>', views.ProductView.as_view()),
    path('product/', views.ProductView.as_view()),
     path('product/image/<str:filename>/', views.get_product_image, name='get_product_image'),

]
