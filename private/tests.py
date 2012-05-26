# Enviroment to test
from gluon.shell import env
globals().update( env( 'piglet', import_models = True ) )

import piglet

import doctest; doctest.testmod( piglet, verbose = True )