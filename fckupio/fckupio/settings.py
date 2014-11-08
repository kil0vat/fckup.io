"""
Django settings for fckupio project.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.7/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
BASE_DIR = os.path.dirname(os.path.dirname(__file__))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.7/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'gs#myn7@+udf&smy2opbqs5+zfawex1f&epuwt&wt9l$hknh$-'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'social.apps.django_app.default',
    'tastypie',
    'core',
    'tasks'

)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    #'core.middleware.RedirectToNoSlash',
)

ROOT_URLCONF = 'fckupio.urls'

WSGI_APPLICATION = 'fckupio.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.7/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.7/howto/static-files/

STATIC_URL = '/static/'
MEDIA_URL = '/media/'
APPEND_SLASH = False
TASTYPIE_ALLOW_MISSING_SLASH = True


AUTHENTICATION_BACKENDS = (
    'social.backends.facebook.Facebook2OAuth2',
    'django.contrib.auth.backends.ModelBackend',
)
#SOCIAL_AUTH_FACEBOOK_KEY = '1497852830500127'
#SOCIAL_AUTH_FACEBOOK_SECRET = '8205a285787b94af98ec540f00530319'
SOCIAL_AUTH_FACEBOOK_KEY = '1498012497150827'
SOCIAL_AUTH_FACEBOOK_SECRET = '3b2cc32b110bed82ec01c7798458fd58'
SOCIAL_AUTH_LOGIN_REDIRECT_URL = '/auth_success'
