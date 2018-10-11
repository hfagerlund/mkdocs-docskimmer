from setuptools import setup, find_packages

VERSION = '0.4.0'


setup(
    name="mkdocs-docskimmer",
    version=VERSION,
    url='https://github.com/hfagerlund/mkdocs-docskimmer',
    license='BSD-2-Clause',
    description='Accessible HTML5 theme for Mkdocs',
    author='Heini Fagerlund',
    author_email='',
    packages=find_packages(),
    include_package_data=True,
    entry_points={
        'mkdocs.themes': [
            'docskimmer = mkdocs_docskimmer',
        ]
    },
    zip_safe=False
)

