from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def contact (request):
    if request.method == "POST":
        nombre = request.POST.get("name")
        email = request.POST.get("email")
        asunto = request.POST.get("asunto")
        mensaje = request.POST.get("message")

        # Formatear el mensaje
        mensaje_completo = f"""
        Nombre: {nombre}
        Email: {email}
        Asunto: {asunto}
        
        Mensaje:
        {mensaje}
        """

        # Enviar el correo
        send_mail(
            subject=f"Mensaje de Fucaesp.org: {asunto}",
            message=mensaje_completo,
            from_email=email,  # Remitente (puede ser el del usuario)
            recipient_list=["fucaesp@gmail.com"],  # Destinatario
            fail_silently=False,
        )

        messages.success(request, "¡Tu mensaje ha sido enviado con éxito!", extra_tags='contacto')
        return redirect("contacto")  # Redirige a la página de contacto

    return render(request, "contacto.html")  # Asegúrate de tener esta plantilla

def portfolio(request): 
    return render(request, 'portfolio.html')

def resume(request):
    return render(request, 'resume.html')