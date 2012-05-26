class Core( object ):
	'''
	Piglet Core application class
	'''
	def __init__( self, db = {} ):
		'''
		>>> Core().db and True
		True
		'''
		from gluon.dal import DAL

		self.db = DAL('sqlite://storage.db')

		if db:
			self.db = db