from django.http import HttpResponse

def helloView(request):
    return HttpResponse('<h1>Hello! I am learning Django</h1>')


    