from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.models import User as DjangoUser
import bcrypt
import jwt

from .models import User

@csrf_exempt
def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        try:
            user = User.objects.get(username=username)
            if bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
                token = jwt.encode({'id': user.id, 'username': user.username}, 'SECRET_KEY', algorithm='HS256').decode('utf-8')
                return JsonResponse({'token': token})
            else:
                return JsonResponse({'error': 'Invalid password'}, status=401)
        except ObjectDoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)
