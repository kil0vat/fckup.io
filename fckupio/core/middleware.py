from django.http import HttpResponsePermanentRedirect

class RedirectToNoSlash(object):
    def process_request(self,request):
        if '/admin' not in request.path and request.path != '/':
            if request.path[-1] == '/':
                return HttpResponsePermanentRedirect(request.path[:-1])  
