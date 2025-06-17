from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .serializers import ContactSerializer


@api_view(['POST'])
def contact(request):
    serializer = ContactSerializer(data=request.data)

    if serializer.is_valid():
        data = serializer.validated_data

        nombre = data["name"]
        email = data["email"]
        asunto = data["asunto"]
        mensaje = data["message"]

        mensaje_completo = f"""
        Nombre: {nombre}
        Email: {email}
        Asunto: {asunto}

        Mensaje:
        {mensaje}
        """

        try:
            send_mail(
                subject=f"Mensaje desde el portafolio: {asunto}",
                message=mensaje_completo,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=["elisamuelvalera@gmail.com"],
                fail_silently=False,
            )
            return Response({"success": True, "message": "Mensaje enviado con éxito"}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"success": False, "error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)