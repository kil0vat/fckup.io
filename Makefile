# constants
#

-include Makefile.def

#
# end of constants

# targets
#

run:
	@echo Starting $(PROJECT_NAME) ...
	find . -name "*.pyc" -delete
	$(MANAGE) runserver $(BIND_TO):$(RUNSERVER_PORT)

migrate:
	$(MANAGE) migrate

syncdb:
	$(MANAGE) syncdb

shell:
	$(MANAGE) shell

collectstatic:
	$(MANAGE) collectstatic --noinput

#celery:
	#cd treelist && DJANGO_SETTINGS_MODULE=treelist.settings celery -A treelist --loglevel=DEBUG worker

#manually specify apps
test:
	echo "no tests"

ctags:
	ctags -R .

